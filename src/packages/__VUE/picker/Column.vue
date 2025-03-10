<template>
  <view class="nut-picker__list" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <view
      ref="roller"
      class="nut-picker-roller"
      :style="threeDimensional ? touchRollerStyle : touchTileStyle"
      @transitionend="stopMomentum"
    >
      <template v-for="(item, index) in column" :key="item[fieldNames.value] ?? index">
        <!-- 3D 效果 -->
        <view
          v-if="item && item[fieldNames.text] && threeDimensional"
          class="nut-picker-roller-item"
          :class="{
            'nut-picker-roller-item-hidden': isHidden(index + 1),
            [item[fieldNames.className]]: item[fieldNames.className]
          }"
          :style="setRollerStyle(index + 1)"
        >
          {{ item[fieldNames.text] }}
        </view>
        <!-- 平铺 -->
        <view
          v-if="item && item[fieldNames.text] && !threeDimensional"
          class="nut-picker-roller-item-tile"
          :class="{
            [item[fieldNames.className]]: item[fieldNames.className],
            'nut-picker-roller-item-selected': isCurrPick(index + 1)
          }"
          :style="{ height: pxCheck(optionHeight), lineHeight: pxCheck(optionHeight) }"
        >
          {{ item[fieldNames.text] }}
        </view>
      </template>
    </view>
    <view class="nut-picker-roller-mask" :style="maskStyles"></view>
  </view>
</template>
<script lang="ts">
import { reactive, ref, watch, computed, toRefs, onMounted, PropType } from 'vue'
import { createComponent } from '@/packages/utils/create'
import { PickerOption, TouchParams, PickerFieldNames } from './types'
import { preventDefault, clamp } from '@/packages/utils/util'
import { pxCheck } from '@/packages/utils/pxCheck'
import { useTouch } from '@/packages/utils/useTouch'
const { create } = createComponent('picker-column')

export default create({
  props: {
    // 当前选中项
    value: [String, Number],
    columnsType: String,
    column: {
      type: Array as PropType<PickerOption[]>,
      default: () => []
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 1000
    },
    visibleOptionNum: {
      type: [Number, String],
      default: 7
    },
    optionHeight: {
      type: [Number, String],
      default: 36
    },
    fieldNames: {
      type: Object as PropType<Required<PickerFieldNames>>,
      default: () => ({})
    },
    // 特殊环境判断
    taro: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click', 'change'],
  setup(props, { emit }) {
    const touch: any = useTouch()

    const state = reactive({
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },

      currIndex: 1,
      transformY: 0,
      scrollDistance: 0,
      rotation: 20
    })

    const roller = ref(null)

    const moving = ref(false)
    const touchDeg = ref<string | number>(0)
    const touchTime = ref(0)

    const DEFAULT_DURATION = 200

    // 触发惯性滑动条件:
    // 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_TIME` 且 move
    // 距离大于 `MOMENTUM_DISTANCE` 时，执行惯性滑动
    const INERTIA_TIME = 300
    const INERTIA_DISTANCE = 15

    const touchRollerStyle = computed(() => {
      return {
        transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `rotate3d(1, 0, 0, ${touchDeg.value})`,
        top: `calc(50% - ${+props.optionHeight / 2}px)`
      }
    })

    const touchTileStyle = computed(() => {
      const { optionHeight } = props
      return {
        transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${state.scrollDistance}px, 0)`,
        top: `calc(50% - ${+optionHeight / 2}px)`,
        height: `${optionHeight}px`
      }
    })

    const setRollerStyle = (index: number) => {
      return `transform: rotate3d(1, 0, 0, ${-state.rotation * index}deg) translate3d(0px, 0px, 104px)`
    }

    const maskStyles = computed(() => {
      return {
        backgroundSize: `100% ${((+props.visibleOptionNum - 1) * +props.optionHeight) / 2}px`
      }
    })

    const onTouchStart = (event: TouchEvent) => {
      touch.start(event)
      if (moving.value && !props.taro) {
        const dom = roller.value as any
        const { transform } = window.getComputedStyle(dom)
        if (props.threeDimensional) {
          const circle = Math.floor(parseInt(touchDeg.value as string) / 360)
          const cos = +transform.split(', ')[5]
          const sin = +transform.split(', ')[6] < 0 ? 180 : 0
          const endDeg = circle * 360 + (Math.acos(cos) / Math.PI) * 180 + sin

          state.scrollDistance = -Math.abs((endDeg / state.rotation - 1) * +props.optionHeight)
        } else {
          state.scrollDistance = +transform.slice(7, transform.length - 1).split(', ')[5]
        }
      }

      preventDefault(event, true)

      state.touchParams.startY = touch.deltaY.value
      state.touchParams.startTime = Date.now()
      state.transformY = state.scrollDistance
    }

    const onTouchMove = (event: TouchEvent) => {
      touch.move(event)
      if ((touch as any).isVertical()) {
        moving.value = true
        preventDefault(event, true)
      }
      (state.touchParams as TouchParams).lastY = touch.deltaY.value
      let move = state.touchParams.lastY - state.touchParams.startY
      setMove(move)
    }

    const onTouchEnd = () => {
      state.touchParams.lastY = touch.deltaY.value
      state.touchParams.lastTime = Date.now()
      let move = state.touchParams.lastY - state.touchParams.startY

      let moveTime = state.touchParams.lastTime - state.touchParams.startTime

      if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
        // 惯性滚动
        const distance = momentum(move, moveTime)
        setMove(distance, 'end', +props.swipeDuration)
        return
      } else {
        setMove(move, 'end')
      }

      setTimeout(() => {
        touch.reset()
        moving.value = false
      }, 0)
    }

    // 惯性滚动 距离
    const momentum = (distance: number, duration: number) => {
      // 惯性滚动的速度
      const speed = Math.abs(distance / duration)
      // 惯性滚动的距离
      distance = (speed / 0.003) * (distance < 0 ? -1 : 1)
      return distance
    }

    const isHidden = (index: number) => {
      if (index >= state.currIndex + 8 || index <= state.currIndex - 8) {
        return true
      } else {
        return false
      }
    }

    const isCurrPick = (index: number) => {
      return index == state.currIndex
    }

    const setTransform = (translateY = 0, type: string | null, time = DEFAULT_DURATION, deg: string | number) => {
      if (type === 'end') {
        touchTime.value = time
      } else {
        touchTime.value = 0
      }
      touchDeg.value = deg as number
      state.scrollDistance = translateY
    }

    const setMove = (move: number, type?: string, time?: number) => {
      const { optionHeight } = props
      let updateMove = move + state.transformY

      if (type === 'end') {
        // 限定滚动距离
        if (updateMove > 0) {
          updateMove = 0
        }
        if (updateMove < -(props.column.length - 1) * +optionHeight) {
          updateMove = -(props.column.length - 1) * +optionHeight
        }

        // 设置滚动距离为 +optionHeight 的倍数值
        let endMove = Math.round(updateMove / +optionHeight) * +optionHeight
        let deg = `${(Math.abs(Math.round(endMove / +optionHeight)) + 1) * state.rotation}deg`

        setTransform(endMove, type, time, deg)

        state.currIndex = Math.abs(Math.round(endMove / +optionHeight)) + 1
      } else {
        let deg = 0
        let currentDeg = (-updateMove / +optionHeight + 1) * state.rotation

        // picker 滚动的最大角度
        const maxDeg = (props.column.length + 1) * state.rotation
        const minDeg = 0

        deg = clamp(currentDeg, minDeg, maxDeg)

        if (minDeg < deg && deg < maxDeg) {
          setTransform(updateMove, null, undefined, deg + 'deg')
          state.currIndex = Math.abs(Math.round(updateMove / +optionHeight)) + 1
        }
      }
    }

    const setChooseValue = () => {
      emit('change', props.column[state.currIndex - 1])
    }

    const modifyStatus = (type: boolean) => {
      const { column } = props
      let index = column.findIndex(columnItem => columnItem[props.fieldNames.value] === props.value)

      state.currIndex = index === -1 ? 1 : (index as number) + 1
      let move = index === -1 ? 0 : (index as number) * +props.optionHeight
      type && setChooseValue()
      setMove(-move)
    }

    // 惯性滚动结束
    const stopMomentum = () => {
      moving.value = false
      touchTime.value = 0
      setChooseValue()
    }

    watch(
      () => props.column,
      () => {
        if (props.column && props.column.length > 0) {
          state.transformY = 0
          modifyStatus(false)
        }
      },
      {
        deep: true
      }
    )

    watch(
      () => props.value,
      () => {
        state.transformY = 0
        modifyStatus(false)
      },
      {
        deep: true
      }
    )

    onMounted(() => {
      modifyStatus(true)
    })

    return {
      ...toRefs(state),
      ...toRefs(props),
      setRollerStyle,
      isHidden,
      isCurrPick,
      roller,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      touchRollerStyle,
      touchTileStyle,
      setMove,
      stopMomentum,
      pxCheck,
      maskStyles
    }
  }
})
</script>
