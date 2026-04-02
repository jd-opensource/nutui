<template>
  <Teleport :to="teleport" :disabled="!teleportDisable">
    <nut-overlay v-if="overlay" :visible="visible" :close-on-click-overlay="closeOnClickOverlay" :z-index="zIndex"
                 :lock-scroll="lockScroll" :duration="duration" :overlay-class="overlayClass" :overlay-style="overlayStyle"
                 v-bind="$attrs" appear @click="onClickOverlay" />
    <Transition appear :name="transitionName" @after-enter="onOpened" @after-leave="onClosed">
      <view v-show="visible" :class="classes" :style="popStyle" @click="onClick">
        <slot v-if="showSlot"></slot>
        <view v-if="closed" class="nut-popup__close-icon" :class="'nut-popup__close-icon--' + closeIconPosition"
              @click="onClickCloseIcon">
          <slot name="close-icon">
            <Close height="12px"></Close>
          </slot>
        </view>
      </view>
    </Transition>
  </Teleport>
</template>
<script lang="ts">
import { computed, reactive, toRefs, watch, watchEffect } from 'vue'
import { Close } from '@nutui/icons-vue'
import NutOverlay from '../overlay'
import { popupProps } from './props'
import { createComponent } from '@/packages/utils/create'
const { componentName, create } = createComponent('popup')

const initIndex = 2000
let _zIndex = initIndex

export default create({
  components: {
    NutOverlay,
    Close
  },
  props: popupProps,
  emits: ['clickPop', 'clickCloseIcon', 'open', 'close', 'opened', 'closed', 'clickOverlay', 'update:visible'],

  setup(props, { emit }) {
    let opened: boolean
    const state = reactive({
      zIndex: props.zIndex,
      showSlot: true,
      closed: props.closeable
    })

    const classes = computed(() => {
      const prefixCls = componentName
      return {
        [prefixCls]: true,
        ['round']: props.round,
        [`nut-popup--${props.position}`]: true,
        [`nut-popup--${props.position}--safebottom`]: props.position === 'bottom' && props.safeAreaInsetBottom,
        [props.popClass]: true
      }
    })

    const popStyle = computed(() => {
      return {
        zIndex: state.zIndex,
        transitionDuration: `${props.duration}s`,
        ...props.style
      }
    })

    const transitionName = computed(() => {
      return props.transition ? props.transition : `nut-popup-slide-${props.position}`
    })

    const open = () => {
      if (!opened) {
        opened = true
        if (props.zIndex !== initIndex) {
          _zIndex = Number(props.zIndex)
        }
        emit('update:visible', true)
        state.zIndex = ++_zIndex
        if (props.destroyOnClose) {
          state.showSlot = true
        }
        emit('open')
      }
    }

    const close = () => {
      if (opened) {
        opened = false
        emit('update:visible', false)
        emit('close')
        if (props.destroyOnClose) {
          setTimeout(() => {
            state.showSlot = false
          }, +props.duration * 1000)
        }
      }
    }

    const onClick = (e: Event) => {
      emit('clickPop', e)
    }

    const onClickCloseIcon = (e: Event) => {
      e.stopPropagation()
      emit('clickCloseIcon', e)
      close()
    }

    const onClickOverlay = (e: Event) => {
      emit('clickOverlay', e)
      if (props.closeOnClickOverlay) {
        close()
      }
    }

    const onOpened = (el: Element) => {
      emit('opened', el)
    }

    const onClosed = (el: Element) => {
      emit('closed', el)
    }

    watch(
      () => props.visible,
      () => {
        if (props.visible && !opened) {
          open()
        }
        if (!props.visible && opened) {
          close()
        }
      },
      {
        immediate: true
      }
    )
    watchEffect(() => {
      // props.visible ? open() : close();
      state.closed = props.closeable
    })

    return {
      ...toRefs(state),
      popStyle,
      transitionName,
      classes,
      onClick,
      onClickCloseIcon,
      onClickOverlay,
      onOpened,
      onClosed
    }
  }
})
</script>
