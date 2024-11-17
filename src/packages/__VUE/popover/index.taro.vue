<template>
  <view
    v-if="!targetId"
    :id="'popoverRef' + refRandomId"
    ref="popoverRef"
    class="nut-popover-wrapper"
    @click="openPopover"
  >
    <slot name="reference"></slot>
  </view>
  <view :class="['nut-popover', `nut-popover--${theme}`, `${customClass}`]" :style="getRootPosition">
    <nut-popup
      v-model:visible="showPopup"
      :pop-class="`nut-popover-content nut-popover-content--${location}`"
      :style="{ background: bgColor, '--transform-scale': DEFAULT_SCALE_TRANSITION }"
      position=""
      transition="nut-popover-content"
      :overlay="overlay"
      :duration="duration"
      :overlay-style="overlayStyle"
      :overlay-class="overlayClass"
      :close-on-click-overlay="closeOnClickOverlay"
    >
      <view :id="'popoverContentRef' + refRandomId" ref="popoverContentRef" class="nut-popover-content-group">
        <view v-if="showArrow" :class="popoverArrow" :style="popoverArrowStyle"> </view>
        <slot name="content"></slot>
        <view
          v-for="(item, index) in list"
          :key="index"
          :class="[item.className, item.disabled && 'nut-popover-menu-disabled', 'nut-popover-menu-item']"
          @click.stop="chooseItem(item, index)"
        >
          <component :is="renderIcon(item.icon)" v-if="item.icon" class="nut-popover-item-img"></component>
          <view class="nut-popover-menu-item-name">{{ item.name }}</view>
        </view>
      </view>
    </nut-popup>

    <view v-if="showPopup" class="nut-popover-content-bg" @touchmove="clickAway" @click="clickAway"></view>
  </view>
</template>
<script lang="ts">
import { onMounted, computed, watch, ref, PropType, CSSProperties, nextTick } from 'vue'
import { createComponent, renderIcon } from '@/packages/utils/create'
import { rectTaro, useTaroRect, useTaroRectById } from '@/packages/utils/useTaroRect'
import { PopoverList, PopoverTheme, PopoverLocation, PopoverRootPosition } from './type'
import NutPopup from '../popup/index.taro.vue'
import Taro from '@tarojs/taro'
const { create } = createComponent('popover')
export default create({
  components: {
    NutPopup
  },
  props: {
    visible: { type: Boolean, default: false },
    list: { type: Array as PropType<PopoverList[]>, default: [] },
    theme: { type: String as PropType<PopoverTheme>, default: 'light' },
    location: { type: String as PropType<PopoverLocation>, default: 'bottom' },
    offset: { type: Array, default: [0, 12] },
    arrowOffset: { type: Number, default: 0 },
    customClass: { type: String, default: '' },
    showArrow: { type: Boolean, default: true },
    duration: { type: [Number, String], default: 0.3 },
    overlay: { type: Boolean, default: false },
    overlayClass: { type: String, default: '' },
    overlayStyle: { type: Object as PropType<CSSProperties> },
    closeOnClickOverlay: { type: Boolean, default: true },
    closeOnClickAction: { type: Boolean, default: true },
    closeOnClickOutside: { type: Boolean, default: true },
    targetId: { type: String, default: '' },
    bgColor: { type: String, default: '' }
  },
  emits: ['update', 'update:visible', 'close', 'choose', 'open'],
  setup(props, { emit }) {
    const popoverRef = ref()
    const popoverContentRef = ref()
    const showPopup = ref(props.visible)

    const rootPosition = ref<PopoverRootPosition>()

    const DEFAULT_SCALE_TRANSITION = 0.8

    const elRect = ref({
      width: 0,
      height: 0
    })

    const popoverArrow = computed(() => {
      const prefixCls = 'nut-popover-arrow'
      const loca = props.location
      const direction = loca.split('-')[0]
      return `${prefixCls} ${prefixCls}-${direction} ${prefixCls}--${loca}`
    })

    const popoverArrowStyle = computed(() => {
      const styles: CSSProperties = {}
      const { bgColor, arrowOffset, location } = props
      const direction = location.split('-')[0]
      const skew = location.split('-')[1]
      const base = 16

      if (bgColor) {
        styles[`border${upperCaseFirst(direction)}Color` as any] = bgColor
      }

      if (props.arrowOffset != 0) {
        if (['bottom', 'top'].includes(direction)) {
          if (!skew) {
            styles.left = `calc(50% + ${arrowOffset}px)`
          }
          if (skew == 'start') {
            styles.left = `${base + arrowOffset}px`
          }
          if (skew == 'end') {
            styles.right = `${base - arrowOffset}px`
          }
        }

        if (['left', 'right'].includes(direction)) {
          if (!skew) {
            styles.top = `calc(50% - ${arrowOffset}px)`
          }
          if (skew == 'start') {
            styles.top = `${base - arrowOffset}px`
          }
          if (skew == 'end') {
            styles.bottom = `${base + arrowOffset}px`
          }
        }
      }
      return styles
    })

    const upperCaseFirst = (str: string) => {
      return str.toLowerCase().replace(/\b\w+\b/g, word => word.substring(0, 1).toUpperCase() + word.substring(1))
    }

    const getRootPosition = computed(() => {
      const styles: CSSProperties = {}
      if (!rootPosition.value) {
        styles.visibility = 'hidden'
        return styles
      }

      const contentWidth = elRect.value.width
      const contentHeight = elRect.value.height
      const { width, height, left, top, right } = rootPosition.value
      const { location, offset } = props
      const direction = location?.split('-')[0]
      const skew = location?.split('-')[1]
      let cross = 0
      let parallel = 0
      if (Array.isArray(offset) && offset?.length === 2) {
        cross += Number(offset[1])
        parallel += Number(offset[0])
      }
      if (width) {
        if (['bottom', 'top'].includes(direction)) {
          const h = direction === 'bottom' ? height + cross : -(contentHeight + cross)
          styles.top = `${top + h}px`

          if (!skew) {
            styles.left = `${-(contentWidth - width) / 2 + left + parallel}px`
          }
          if (skew === 'start') {
            styles.left = `${left + parallel}px`
          }
          if (skew === 'end') {
            styles.left = `${right + parallel}px`
          }
        }
        if (['left', 'right'].includes(direction)) {
          const contentW = direction === 'left' ? -(contentWidth + cross) : width + cross
          styles.left = `${left + contentW}px`
          if (!skew) {
            styles.top = `${top - contentHeight / 2 + height / 2 - 4 + parallel}px`
          }
          if (skew === 'start') {
            styles.top = `${top + parallel}px`
          }
          if (skew === 'end') {
            styles.top = `${top + height + parallel}px`
          }
        }
      }

      if (elRect.value.width === 0) {
        styles.visibility = 'hidden'
      } else {
        styles.visibility = 'initial'
      }
      return styles
    })

    const getPopoverContentW = async () => {
      try {
        const rect = await useTaroRect(popoverContentRef)
        elRect.value = {
          height: rect.height / DEFAULT_SCALE_TRANSITION,
          width: rect.width / DEFAULT_SCALE_TRANSITION
        }
      } catch (error) {
        console.warn('[NutUI] Failed to get rect:', error)
      }
    }

    // 获取宽度
    const getContentWidth = async () => {
      getPopoverContentW()
      Taro.createSelectorQuery()
        .selectViewport()
        .scrollOffset(async (result) => {
          const distance = result.scrollTop
          if (props.targetId) {
            const rect = (await useTaroRectById(props.targetId)) as rectTaro
            rootPosition.value = {
              width: rect?.width,
              height: rect?.height,
              left: rect?.left,
              top: rect?.top + distance,
              right: rect?.right
            }
          } else {
            const rect = await useTaroRect(popoverRef)
            rootPosition.value = {
              width: rect?.width,
              height: rect?.height,
              left: rect?.left,
              top: rect?.top + distance,
              right: rect?.right
            }
          }
        })
        .exec()
    }

    onMounted(() => {
      getContentWidth()
    })

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value
        if (value) nextTick(() => getContentWidth())
      }
    )

    watch(
      () => props.location,
      () => {
        getContentWidth()
      }
    )
    const update = (val: boolean) => {
      emit('update', val)
      emit('update:visible', val)
    }
    const openPopover = () => {
      update(!props.visible)
      emit('open')
    }
    const closePopover = () => {
      emit('update:visible', false)
      emit('close')
    }
    const chooseItem = (item: any, index: number) => {
      !item.disabled && emit('choose', item, index)
      if (props.closeOnClickAction) {
        closePopover()
      }
    }
    const clickAway = () => {
      props.closeOnClickOutside && closePopover()
    }

    const refRandomId = Math.random().toString(36).slice(-8)

    return {
      showPopup,
      openPopover,
      popoverArrow,
      closePopover,
      chooseItem,
      popoverRef,
      popoverContentRef,
      getRootPosition,
      popoverArrowStyle,
      renderIcon,
      refRandomId,
      clickAway,
      DEFAULT_SCALE_TRANSITION
    }
  }
})
</script>
