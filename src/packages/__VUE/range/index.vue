<template>
  <view :class="containerClasses">
    <view v-if="!hiddenRange" class="nut-range-min">{{ +min }}</view>
    <view ref="root" :style="wrapperStyle" :class="classes" @click.stop="onClick">
      <view v-if="marksList.length > 0" class="nut-range-mark">
        <span v-for="marks in marksList" :key="marks" :class="markClassName(marks)" :style="marksStyle(marks)">
          {{ marks }}
          <span class="nut-range-tick" :style="tickStyle(marks)"></span>
        </span>
      </view>
      <view class="nut-range-bar" :style="barStyle">
        <template v-if="range">
          <view
            v-for="index of [0, 1]"
            :key="index"
            role="slider"
            :class="{
              'nut-range-button-wrapper-left': index == 0,
              'nut-range-button-wrapper-right': index == 1
            }"
            :tabindex="disabled ? -1 : 0"
            :aria-valuemin="+min"
            :aria-valuenow="curValue(index)"
            :aria-valuemax="+max"
            aria-orientation="horizontal"
            @touchstart.stop.prevent="
              (e: TouchEvent) => {
                if (typeof index === 'number') {
                  // 实时更新当前拖动的按钮索引
                  buttonIndex = index
                }
                onTouchStart(e)
              }
            "
            @touchmove.stop.prevent="onTouchMove"
            @touchend.stop.prevent="onTouchEnd"
            @touchcancel.stop.prevent="onTouchEnd"
            @click="(e: Event) => e.stopPropagation()"
          >
            <slot v-if="$slots.button" name="button"></slot>
            <view v-else class="nut-range-button" :style="buttonStyle">
              <view v-if="!hiddenTag" class="number">{{ curValue(index) }}</view>
            </view>
          </view>
        </template>
        <template v-else>
          <view
            role="slider"
            class="nut-range-button-wrapper"
            :tabindex="disabled ? -1 : 0"
            :aria-valuemin="+min"
            :aria-valuenow="curValue()"
            :aria-valuemax="+max"
            aria-orientation="horizontal"
            @touchstart.stop.prevent="
              (e: TouchEvent) => {
                onTouchStart(e)
              }
            "
            @touchmove.stop.prevent="onTouchMove"
            @touchend.stop.prevent="onTouchEnd"
            @touchcancel.stop.prevent="onTouchEnd"
            @click="(e: Event) => e.stopPropagation()"
          >
            <slot v-if="$slots.button" name="button"></slot>
            <view v-else class="nut-range-button" :style="buttonStyle">
              <view v-if="!hiddenTag" class="number">{{ curValue() }}</view>
            </view>
          </view>
        </template>
      </view>
    </view>
    <view v-if="!hiddenRange" class="nut-range-max">{{ +max }}</view>
  </view>
</template>
<script lang="ts">
import { ref, toRefs, computed, PropType, CSSProperties, toRef } from 'vue'
import { createComponent } from '@/packages/utils/create'
import { useTouch } from '@/packages/utils/useTouch'
import { useRect } from '@/packages/utils/useRect'
import { isArray } from '@/packages/utils/util'
import { SliderValue } from './type'
import { useFormDisabled } from '../form/common'
const { componentName, create } = createComponent('range')

export default create({
  props: {
    range: {
      type: Boolean,
      default: false
    },

    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    buttonColor: String,
    vertical: {
      type: Boolean,
      default: false
    },
    marks: {
      type: Object,
      default: {}
    },
    hiddenRange: {
      type: Boolean,
      default: false
    },
    hiddenTag: {
      type: Boolean,
      default: false
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array] as PropType<SliderValue>,
      default: 0
    }
  },

  emits: ['change', 'dragEnd', 'dragStart', 'update:modelValue'],

  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, 'disabled'))
    const buttonIndex = ref(0)
    let startValue: SliderValue
    let currentValue: SliderValue

    const root = ref<HTMLElement>()
    const dragStatus = ref<'start' | 'draging' | ''>()
    const touch = useTouch()

    const marksList = computed(() => {
      const { marks, max, min } = props
      const marksKeys = Object.keys(marks)
      const list = marksKeys
        .map(parseFloat)
        .sort((a, b) => a - b)
        .filter(point => point >= +min && point <= +max)
      return list
    })
    const scope = computed(() => Number(props.max) - Number(props.min))

    const classes = computed(() => {
      const prefixCls = componentName
      return {
        [prefixCls]: true,
        [`${prefixCls}-disabled`]: disabled.value,
        [`${prefixCls}-vertical`]: props.vertical,
        [`${prefixCls}-show-number`]: !props.hiddenRange
      }
    })
    const containerClasses = computed(() => {
      const prefixCls = 'nut-range-container'
      return {
        [prefixCls]: true,
        [`${prefixCls}-vertical`]: props.vertical
      }
    })
    const wrapperStyle = computed(() => {
      return {
        background: props.inactiveColor
      }
    })

    const buttonStyle = computed(() => {
      return {
        borderColor: props.buttonColor
      }
    })

    const isRange = (val: unknown): val is number[] => !!props.range && Array.isArray(val)

    const calcMainAxis = () => {
      const { modelValue, min } = props
      if (isRange(modelValue)) {
        return `${((modelValue[1] - modelValue[0]) * 100) / scope.value}%`
      }
      return `${((modelValue - Number(min)) * 100) / scope.value}%`
    }

    const calcOffset = () => {
      const { modelValue, min } = props
      if (isRange(modelValue)) {
        return `${((modelValue[0] - Number(min)) * 100) / scope.value}%`
      }
      return `0%`
    }

    const barStyle = computed<CSSProperties>(() => {
      if (props.vertical) {
        return {
          height: calcMainAxis(),
          top: calcOffset(),
          background: props.activeColor,
          transition: dragStatus.value ? 'none' : undefined
        }
      } else {
        return {
          width: calcMainAxis(),
          left: calcOffset(),
          background: props.activeColor,
          transition: dragStatus.value ? 'none' : undefined
        }
      }
    })
    const markClassName = (mark: number) => {
      const classPrefix = 'nut-range-mark'
      const { modelValue, max, min } = props
      let lowerBound = Number(min)
      let upperBound: number | number[] = Number(max)
      if (props.range) {
        const [left, right] = modelValue as number[]
        lowerBound = left
        upperBound = right
      } else {
        upperBound = modelValue
      }
      let isActive = mark <= +upperBound && mark >= lowerBound
      return {
        [`${classPrefix}-text`]: true,
        [`${classPrefix}-text-active`]: isActive
      }
    }
    const marksStyle = (mark: number) => {
      const { min, vertical } = props
      let style: CSSProperties = {
        left: `${((mark - Number(min)) / scope.value) * 100}%`
      }
      if (vertical) {
        style = {
          top: `${((mark - Number(min)) / scope.value) * 100}%`
        }
      }
      return style
    }
    const tickStyle = (mark: number) => {
      const { modelValue, max, min } = props
      let lowerBound = Number(min)
      let upperBound = Number(max)
      if (props.range) {
        const [left, right] = modelValue as number[]
        lowerBound = left
        upperBound = right
      }
      let isActive = mark <= upperBound && mark >= lowerBound
      let style: CSSProperties = {
        background: !isActive ? props.inactiveColor : props.activeColor
      }

      return style
    }
    const format = (value: number) => {
      const { min, max, step } = props
      value = Math.max(+min, Math.min(value, +max))
      return Math.round(value / +step) * +step
    }

    const isSameValue = (newValue: SliderValue, oldValue: SliderValue) =>
      JSON.stringify(newValue) === JSON.stringify(oldValue)

    const handleOverlap = (value: number[]) => {
      if (value[0] > value[1]) {
        return value.slice(0).reverse()
      }
      return value
    }

    const updateValue = (value: SliderValue, end?: boolean) => {
      if (isRange(value)) {
        value = handleOverlap(value).map(format)
      } else {
        value = format(value)
      }

      if (!isSameValue(value, props.modelValue)) {
        emit('update:modelValue', value)
      }

      if (end && !isSameValue(value, startValue)) {
        emit('change', value)
      }
    }

    const onClick = (event: MouseEvent) => {
      if (disabled.value) {
        return
      }

      const { min, modelValue } = props
      const rect = useRect(root)
      let delta = event.clientX - rect.left
      let total = rect.width
      if (props.vertical) {
        delta = event.clientY - rect.top
        total = rect.height
      }
      const value = Number(min) + (delta / total) * scope.value
      if (isRange(modelValue)) {
        const [left, right] = modelValue
        const middle = (left + right) / 2
        if (value <= middle) {
          updateValue([value, right], true)
        } else {
          updateValue([left, value], true)
        }
      } else {
        updateValue(value, true)
      }
    }

    const onTouchStart = (event: TouchEvent) => {
      if (disabled.value) {
        return
      }

      touch.start(event)
      currentValue = props.modelValue

      if (isRange(currentValue)) {
        startValue = currentValue.map(format)
      } else {
        startValue = format(currentValue)
      }

      dragStatus.value = 'start'
    }

    const onTouchMove = (event: TouchEvent) => {
      if (disabled.value) {
        return
      }

      if (dragStatus.value === 'start') {
        emit('dragStart')
      }

      touch.move(event)
      dragStatus.value = 'draging'

      const rect = useRect(root)
      let delta = touch.deltaX.value
      let total = rect.width
      let diff = (delta / total) * scope.value
      if (props.vertical) {
        delta = touch.deltaY.value
        total = rect.height
        diff = (delta / total) * scope.value
      }
      if (isRange(startValue)) {
        (currentValue as number[])[buttonIndex.value] = startValue[buttonIndex.value] + diff
      } else {
        currentValue = startValue + diff
      }
      updateValue(currentValue)
    }

    const onTouchEnd = () => {
      if (disabled.value) {
        return
      }
      if (dragStatus.value === 'draging') {
        updateValue(currentValue, true)
        emit('dragEnd')
      }
      dragStatus.value = ''
    }

    const curValue = (idx?: number): number => {
      const value
        = isArray(props.modelValue) && typeof idx === 'number'
          ? (props.modelValue as number[])[idx]
          : Number(props.modelValue)
      return value
    }

    return {
      root,
      classes,
      wrapperStyle,
      buttonStyle,
      onClick,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      ...toRefs(props),
      barStyle,
      curValue,
      buttonIndex,
      containerClasses,
      markClassName,
      marksStyle,
      marksList,
      tickStyle,
      disabled
    }
  }
})
</script>
