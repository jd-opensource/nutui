<template>
  <view class="nut-tour">
    <view v-if="showTour" class="nut-tour-masked" @click="handleClickMask"></view>

    <view v-for="(step, i) in steps" :key="i" style="height: 0">
      <view
        v-if="showTour"
        :id="`nut-tour-popid${i}${refRandomId}`"
        class="nut-tour-mask"
        :class="[mask ? (showPopup[i] ? '' : 'nut-tour-mask-hidden') : 'nut-tour-mask-none']"
        :style="maskStyles[i]"
      ></view>
      <nut-popover
        v-model:visible="showPopup[i]"
        :location="step.location || location"
        :target-id="`nut-tour-popid${i}${refRandomId}`"
        :bg-color="bgColor"
        :theme="theme"
        :close-on-click-outside="false"
        :offset="step.popoverOffset || [0, 12]"
        :arrow-offset="step.arrowOffset || 0"
        :duration="0.2"
      >
        <template #content>
          <slot>
            <view v-if="type == 'step'" class="nut-tour-content">
              <view v-if="showTitleBar" class="nut-tour-content-top">
                <view @click="close">
                  <Close class="nut-tour-content-top-close" size="10px" />
                </view>
              </view>
              <view class="nut-tour-content-inner">
                {{ step.content }}
              </view>
              <view class="nut-tour-content-bottom">
                <view class="nut-tour-content-bottom-init">{{ active + 1 }}/{{ steps.length }}</view>
                <view class="nut-tour-content-bottom-operate">
                  <slot name="prev-step">
                    <view
                      v-if="active != 0 && showPrevStep"
                      class="nut-tour-content-bottom-operate-btn"
                      @click="changeStep('prev')"
                    >
                      {{ prevStepTxt }}
                    </view>
                  </slot>
                  <view
                    v-if="steps.length - 1 == active"
                    class="nut-tour-content-bottom-operate-btn active"
                    @click="close"
                  >
                    {{ completeTxt }}
                  </view>

                  <slot name="next-step">
                    <view
                      v-if="steps.length - 1 != active"
                      class="nut-tour-content-bottom-operate-btn active"
                      @click="changeStep('next')"
                    >
                      {{ nextStepTxt }}
                    </view>
                  </slot>
                </view>
              </view>
            </view>

            <view v-if="type == 'tile'" class="nut-tour-content nut-tour-content-tile">
              <view class="nut-tour-content-inner">
                {{ step.content }}
              </view>
            </view>
          </slot>
        </template>
      </nut-popover>
    </view>
  </view>
</template>
<script lang="ts">
import { watch, ref, reactive, toRefs, PropType, onMounted } from 'vue'
import { PopoverLocation, PopoverTheme } from '../popover/type'
import { createComponent } from '@/packages/utils/create'
import { rectTaro, useTaroRectById } from '@/packages/utils/useTaroRect'
import { Close } from '@nutui/icons-vue-taro'
import NutPopover from '../popover/index.taro.vue'

export interface StepOptions {
  target: string
  content?: string
  location?: PopoverLocation
  popoverOffset?: number[]
  arrowOffset?: number
}
export type TourType = 'step' | 'tile'
const { create } = createComponent('tour')
export default create({
  components: {
    NutPopover,
    Close
  },
  props: {
    modelValue: { type: Boolean, default: false },
    type: {
      type: String as PropType<TourType>,
      default: 'step'
    },
    steps: {
      type: Array as PropType<StepOptions[]>,
      default: () => []
    },
    location: {
      type: String as PropType<PopoverLocation>,
      default: 'bottom'
    },
    current: {
      type: Number,
      default: 0
    },
    nextStepTxt: {
      type: String,
      default: '下一步'
    },
    prevStepTxt: {
      type: String,
      default: '上一步'
    },
    completeTxt: {
      type: String,
      default: '完成'
    },
    mask: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Array as PropType<Number[]>,
      default: [8, 10]
    },
    bgColor: {
      type: String,
      default: ''
    },
    theme: {
      type: String as PropType<PopoverTheme>,
      default: 'light'
    },
    maskWidth: {
      type: [Number, String],
      default: ''
    },
    maskHeight: {
      type: [Number, String],
      default: ''
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    showPrevStep: {
      type: Boolean,
      default: true
    },
    showTitleBar: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue', 'change', 'close'],
  setup(props, { emit }) {
    const state = reactive({
      showTour: props.modelValue,
      active: 0
    })

    const showPopup = ref([false])

    let maskRect: rectTaro[] = []

    let maskStyles = ref<any[]>([])

    const maskStyle = (index: number) => {
      const { offset, maskWidth, maskHeight } = props

      if (!maskRect[index]) return
      const { width, height, left, top } = maskRect[index]

      const center = [left + width / 2, top + height / 2] // 中心点 【横，纵】
      const w: number = Number(maskWidth ? maskWidth : width)
      const h: number = Number(maskHeight ? maskHeight : height)

      const styles = {
        width: `${w + +offset[1] * 2}px`,
        height: `${h + +offset[0] * 2}px`,
        top: `${center[1] - h / 2 - +offset[0]}px`,
        left: `${center[0] - w / 2 - +offset[1]}px`
      }
      maskStyles.value[index] = styles
    }

    const changeStep = (type: string) => {
      const current = state.active
      let next = current

      next = type == 'next' ? current + 1 : current - 1
      showPopup.value[current] = false

      setTimeout(() => {
        state.active = next
        emit('change', state.active)
        showPopup.value[state.active] = true
      }, 300)
    }

    const getRootPosition = async () => {
      for (const [index, step] of props.steps.entries()) {
        try {
          const rect = await useTaroRectById(step.target)
          maskRect[index] = rect as rectTaro
          maskStyle(index)
        } catch (error) {
          console.warn(`[NutUI] Failed to get rect for step ${index}:`, error)
        }
      }
    }

    const close = () => {
      state.showTour = false
      showPopup.value[state.active] = false
      emit('close', state.active)
      emit('update:modelValue', false)
    }

    const handleClickMask = () => {
      props.closeOnClickOverlay && close()
    }

    onMounted(() => {
      getRootPosition()
    })

    watch(
      () => props.modelValue,
      (visible) => {
        if (visible) {
          state.active = props.type === 'step' ? Math.min(Math.max(0, props.current), props.steps.length - 1) : 0
          getRootPosition()
        }
        state.showTour = visible
        showPopup.value[state.active] = visible
      }
    )

    const refRandomId = Math.random().toString(36).slice(-8)

    return {
      ...toRefs(state),
      maskStyle,
      changeStep,
      close,
      handleClickMask,
      showPopup,
      maskStyles,
      refRandomId
    }
  }
})
</script>
