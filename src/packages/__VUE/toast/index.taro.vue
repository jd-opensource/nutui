<template>
  <Transition name="toast-fade" @after-leave="onAfterLeave">
    <view
      v-show="visible"
      :class="toastBodyClass"
      :style="{
        bottom: center ? 'auto' : bottom,
        'background-color': coverColor
      }"
      @click="clickCover"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>
        <view
          class="nut-toast-inner"
          :style="{
            'text-align': textAlignCenter ? 'center' : 'left',
            'background-color': bgColor
          }"
        >
          <view v-if="hasIcon" class="nut-toast-icon-wrapper">
            <component :is="renderIcon(iconName)" color="#ffffff"></component>
          </view>
          <div v-if="title" class="nut-toast-title">
            {{ title }}
          </div>
          <view class="nut-toast-text" v-html="msg"></view>
        </view>
      </template>
    </view>
  </Transition>
</template>
<script lang="ts">
import { Component, computed, PropType, reactive, watch } from 'vue'
import { createComponent, renderIcon } from '@/packages/utils/create'
const { create } = createComponent('toast')
import { Failure, Loading, Success, Tips } from '@nutui/icons-vue-taro'
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
      default: () => {}
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
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:visible', 'closed'],
  setup(props, { emit }) {
    let timer: NodeJS.Timeout | null | undefined
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    }
    const state = reactive({
      closed: false
    })
    const hide = () => {
      if (state.closed) return
      state.closed = true
      emit('update:visible', false)
      emit('closed')
    }
    const show = () => {
      clearTimer()
      state.closed = false
      if (props.duration) {
        timer = setTimeout(() => {
          hide()
        }, props.duration)
      }
    }
    const clickCover = () => {
      if (props.closeOnClickOverlay) {
        hide()
      }
    }

    watch(
      () => props.visible,
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
        return !!props.icon
      }
    })
    const iconName = computed(() => {
      if (props.icon) {
        return props.icon
      } else {
        return {
          success: Success,
          fail: Failure,
          warn: Tips,
          loading: Loading
        }[props.type] as any
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

    const onAfterLeave = () => {
      if (props.visible) {
        clearTimer()
        hide()
      }
    }

    return {
      clickCover,
      hasIcon,
      iconName,
      toastBodyClass,
      onAfterLeave,
      renderIcon
    }
  }
})
</script>
