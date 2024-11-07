<template>
  <view :class="classes">
    <view :class="['nut-collapse-item__title', { 'nut-collapse-item__title--disabled': disabled }]" @click="toggle">
      <view class="nut-collapse-item__title-main">
        <view class="nut-collapse-item__title-main-value">
          <slot v-if="$slots.title" name="title"></slot>
          <template v-else>
            <view class="nut-collapse-item__title-mtitle" v-html="title"></view>
          </template>
          <view v-if="label" class="nut-collapse-item__title-label">{{ label }}</view>
        </view>
      </view>
      <view v-if="$slots.value" class="nut-collapse-item__title-sub">
        <slot name="value"></slot>
      </view>
      <view v-else class="nut-collapse-item__title-sub" v-html="value"></view>
      <view
        :class="['nut-collapse-item__title-icon', { 'nut-collapse-item__title-icon--expanded': expanded }]"
        :style="{ transform: 'rotate(' + (expanded ? rotate : 0) + 'deg)' }"
      >
        <slot v-if="$slots.icon" name="icon"></slot>
        <component :is="renderIcon(icon)" v-else></component>
      </view>
    </view>

    <view v-if="$slots.extra" class="nut-collapse__item-extraWrapper" :class="{ transition: transition }">
      <div class="nut-collapse__item-extraWrapper__extraRender">
        <slot name="extra"></slot>
      </div>
    </view>
    <view
      ref="wrapperRef"
      class="nut-collapse__item-wrapper"
      :class="{ transition: transition }"
      :style="{
        willChange: 'height',
        height: wrapperHeight
      }"
      @transitionend="onTransitionEnd"
    >
      <view ref="contentRef" class="nut-collapse__item-wrapper__content">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, computed, watch, inject } from 'vue'
import { DownArrow } from '@nutui/icons-vue'
import { renderIcon } from '@/packages/utils/create'
import { COLLAPSE_KEY } from '../collapse/types'

defineOptions({
  name: 'NutCollapseItem'
})

export type CollapseItemProps = Partial<{
  title: string
  value: string
  label: string
  disabled: boolean
  name: string | number
  border: boolean
  icon: any
  rotate: string | number
  transition: boolean
}>

const props = withDefaults(defineProps<CollapseItemProps>(), {
  title: '',
  value: '',
  label: '',
  disabled: false,
  name: -1,
  border: true,
  icon: () => DownArrow,
  rotate: 180,
  transition: true
})

// 获取 DOM 元素
const wrapperRef = ref<HTMLDivElement | null>(null)
const contentRef = ref<HTMLDivElement | null>(null)

const parent = inject(COLLAPSE_KEY)

const classes = computed(() => {
  const prefixCls = 'nut-collapse-item'
  return {
    [prefixCls]: true,
    [prefixCls + '__border']: props.border
  }
})

const expanded = computed(() => {
  if (parent) {
    return parent.isExpanded(props.name)
  }
  return false
})

const wrapperHeight = ref(expanded.value ? 'auto' : '0px')

const toggle = () => {
  parent && parent.updateVal(props.name)
}

const onTransitionEnd = () => {
  if (expanded.value) {
    wrapperHeight.value = 'auto'
  }
}

const open = () => {
  wrapperHeight.value = '0px'
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const height = contentRef.value?.offsetHeight
      wrapperHeight.value = height ? `${height}px` : 'auto'
    })
  })
}

const close = () => {
  const height = contentRef.value?.offsetHeight
  wrapperHeight.value = height ? `${height}px` : 'auto'
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      wrapperHeight.value = '0px'
    })
  })
}

watch(expanded, (value) => {
  value ? open() : close()
})
</script>
