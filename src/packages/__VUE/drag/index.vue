<template>
  <view
    ref="myDrag"
    class="nut-drag"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { onMounted, onDeactivated, onActivated, reactive, ref, PropType } from 'vue'
import { createComponent } from '@/packages/utils/create'
import requestAniFrame from '@/packages/utils/raf'
import { DragDirection } from './types'
const { create } = createComponent('drag')
export default create({
  props: {
    attract: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String as PropType<DragDirection>,
      default: 'all'
    },
    boundary: {
      type: Object,
      default: () => {
        return {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    }
  },
  setup(props) {
    const myDrag = ref()
    const state = reactive({
      keepAlive: false,
      elWidth: 0,
      elHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      startTop: 0,
      startLeft: 0,
      nx: 0,
      ny: 0,
      xPum: 0,
      yPum: 0,
      position: { x: 0, y: 0 },
      boundary: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      } as Record<string, any>
    })

    function getInfo() {
      const domElem = document.documentElement
      state.elWidth = myDrag.value.offsetWidth
      state.elHeight = myDrag.value.offsetHeight
      state.screenWidth = domElem.clientWidth || 375
      state.screenHeight = domElem.clientHeight || 667
    }

    function goLeft(target: HTMLElement) {
      if (state.boundary.left) {
        if (+target.style.left.split('px')[0] > state.boundary.left) {
          target.style.left = +target.style.left.split('px')[0] - 10 + 'px'
          requestAniFrame(() => {
            goLeft(target)
          })
        } else {
          target.style.left = `${state.boundary.left}px`
        }
      } else {
        if (+target.style.left.split('px')[0] > 10) {
          target.style.left = +target.style.left.split('px')[0] - 10 + 'px'
          requestAniFrame(() => {
            goLeft(target)
          })
        } else {
          target.style.left = '0px'
        }
      }
    }
    function goRight(target: HTMLElement, rightLocation: number) {
      if (rightLocation - parseInt(target.style.left.split('px')[0]) > 10) {
        target.style.left = parseInt(target.style.left.split('px')[0]) + 10 + 'px'
        requestAniFrame(() => {
          goRight(target, rightLocation)
        })
      } else {
        target.style.left = rightLocation + 'px'
      }
    }
    function touchMove(e: TouchEvent) {
      e.preventDefault()
      const target = e.currentTarget as HTMLElement
      if (e.targetTouches.length === 1) {
        const touch = e.targetTouches[0]
        state.nx = touch.clientX - state.position.x
        state.ny = touch.clientY - state.position.y
        state.xPum = state.startLeft + state.nx
        state.yPum = state.startTop + state.ny
        const rightLocation = state.screenWidth - state.elWidth - state.boundary.right
        if (Math.abs(state.xPum) > rightLocation) {
          state.xPum = rightLocation
        } else if (state.xPum <= state.boundary.left) {
          state.xPum = state.boundary.left
        }
        if (state.yPum < state.boundary.top) {
          state.yPum = state.boundary.top
        } else if (state.yPum > state.screenHeight - state.elHeight - state.boundary.bottom) {
          state.yPum = state.screenHeight - state.elHeight - state.boundary.bottom
        }
        if (props.direction != 'y') {
          target.style.left = state.xPum + 'px'
        }
        if (props.direction != 'x') {
          target.style.top = state.yPum + 'px'
        }
      }
    }
    function touchEnd(e: TouchEvent) {
      const target = e.currentTarget as HTMLElement
      const touch = e.changedTouches[0]
      let currX = touch.clientX
      const rightLocation = state.screenWidth - state.elWidth - state.boundary.right
      if (currX > rightLocation) {
        currX = rightLocation
      } else if (currX < state.boundary.left) {
        currX = state.boundary.left
      } else {
        currX = currX < state.screenWidth / 2 ? state.boundary.left : rightLocation
      }
      if (props.direction != 'y' && props.attract) {
        if (currX < state.screenWidth / 2) {
          requestAniFrame(() => {
            goLeft(target)
          })
        } else {
          requestAniFrame(() => {
            goRight(target, rightLocation)
          })
        }
      }
      if (props.direction != 'x') {
        target.style.top = state.yPum + 'px'
      }
    }
    function touchStart(e: TouchEvent) {
      const target = e.currentTarget as HTMLElement
      const touches = e.touches[0]
      const touch = e.targetTouches[0]
      state.startTop = target.offsetTop
      state.startLeft = target.offsetLeft
      state.position.x = touches.clientX
      state.position.y = touches.clientY
      state.nx = touch.clientX - state.position.x
      state.ny = touch.clientY - state.position.y
      state.xPum = state.startLeft + state.nx
      state.yPum = state.startTop + state.ny
    }
    onMounted(() => {
      getInfo()
      state.boundary = props.boundary
    })
    onActivated(() => {
      if (state.keepAlive) {
        state.keepAlive = false
      }
    })
    onDeactivated(() => {
      state.keepAlive = true
      myDrag.value?.removeEventListener('touchstart', touchStart)
      myDrag.value?.removeEventListener('touchmove', touchMove)
      myDrag.value?.removeEventListener('touchend', touchEnd)
    })
    return {
      myDrag,
      touchStart,
      touchMove,
      touchEnd
    }
  }
})
</script>
