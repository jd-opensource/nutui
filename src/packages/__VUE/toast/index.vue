<template>
  <Transition name="toast-fade" @after-leave="onAfterLeave">
    <view
      v-show="state.mounted"
      :class="toastBodyClass"
      :style="{
        bottom: center ? 'auto' : bottom,
        'background-color': coverColor
      }"
      @click="clickCover"
    >
      <view
        class="nut-toast-inner"
        :style="{
          'text-align': textAlignCenter ? 'center' : 'left',
          'background-color': bgColor
        }"
      >
        <view v-if="hasIcon" :class="toastIconWrapperClass">
          <component :is="renderIcon(icon)" color="#ffffff"></component>
        </view>
        <div v-if="title" class="nut-toast-title">
          {{ title }}
        </div>
        <view class="nut-toast-text" v-html="msg"></view>
      </view>
    </view>
  </Transition>
</template>
<script lang="ts">
import { reactive, computed, watch, onMounted, PropType, Component } from 'vue'
import { createComponent, renderIcon } from '@/packages/utils/create'
const { create } = createComponent('toast')
export default create({
  components: {},
  props: {
    id: String,
    msg: String,
    duration: {
      type: Number,
      default: 2000
    },
    center: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    },
    customClass: String,
    bottom: {
      type: String,
      default: '30px'
    },
    size: {
      type: [String, Number],
      default: 'base'
    },
    icon: {
      type: Object as PropType<Component>,
      default: null
    },
    textAlignCenter: {
      type: Boolean,
      default: true
    },
    loadingRotate: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: ''
    },
    onClose: Function,
    unmount: Function,
    cover: {
      type: Boolean,
      default: false
    },
    coverColor: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  setup(props) {
    let timer: null | number | undefined
    const state = reactive({
      mounted: false,
      closing: false
    })
    onMounted(() => {
      state.mounted = true
    })
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    }
    const hide = () => {
      state.mounted = false
      state.closing = true
    }
    const show = () => {
      clearTimer()
      state.closing = false
      if (props.duration) {
        timer = window.setTimeout(() => {
          hide()
        }, props.duration)
      }
    }
    const clickCover = () => {
      if (!props.closeOnClickOverlay || state.closing) return // 点击遮罩时如果正在关闭中，则不触发关闭事件，避免重复调用close事件
      hide()
    }

    if (props.duration) {
      show()
    }

    watch(
      () => props.duration,
      (val) => {
        if (val) {
          show()
        }
      }
    )

    const hasIcon = computed(() => {
      if (props.type !== 'text') {
        return true
      } else {
        return props.icon !== null
      }
    })
    const toastBodyClass = computed(() => {
      return [
        'nut-toast',
        { 'nut-toast-center': props.center },
        { 'nut-toast-has-icon': hasIcon.value },
        { 'nut-toast-cover': props.cover },
        { 'nut-toast-loading': props.type === 'loading' },
        props.customClass,
        'nut-toast-' + props.size
      ]
    })
    const toastIconWrapperClass = computed(() => {
      return ['nut-toast-icon-wrapper', { 'nut-toast-icon-no-animation': !props.loadingRotate }]
    })
    const onAfterLeave = () => {
      clearTimer()
      props.unmount?.(props.id)
      props.onClose && props.onClose()
    }

    return {
      state,
      hide,
      clickCover,
      hasIcon,
      toastBodyClass,
      toastIconWrapperClass,
      onAfterLeave,
      renderIcon
    }
  }
})
</script>
