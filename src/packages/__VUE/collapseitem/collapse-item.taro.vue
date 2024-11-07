<template>
  <view :class="classes">
    <view
      :class="['nut-collapse-item__title', { 'nut-collapse-item__title--disabled': disabled }]"
      @click="handleClick"
    >
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
    >
      <view :id="`nut-collapse__item-${refRandomId}`" class="nut-collapse__item-wrapper__content">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted, inject, useSlots } from 'vue'
import { DownArrow } from '@nutui/icons-vue-taro'
import { renderIcon } from '@/packages/utils/create'
import Taro from '@tarojs/taro'
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

const slots = useSlots()

const wrapperRef = ref<HTMLDivElement | null>(null)
const refRandomId = Math.random().toString(36).slice(-8)
const target = `#nut-collapse__item-${refRandomId}`
const currentHeight = ref<string>('auto')
const inAnimation = ref(false)
const timeoutId = ref<any>('')
const parent = inject(COLLAPSE_KEY)
const classes = computed(() => {
  const prefixCls = 'nut-collapse-item'
  return {
    [prefixCls]: true,
    [prefixCls + '__border']: props.border
  }
})

onMounted(() => {
  setTimeout(() => {
    getRect(target).then((res: any) => {
      if (res?.height) {
        currentHeight.value = `${res.height}px`
      }
    })
  }, 100)
})

watch(
  () => slots.default?.(),
  () => {
    setTimeout(() => {
      getRect(target).then((res: any) => {
        if (res?.height) {
          currentHeight.value = `${res.height}px`
        }
      })
    }, 200)
  }
)

const getRect = (selector: string) => {
  return new Promise((resolve) => {
    Taro.createSelectorQuery()
      .select(selector)
      .boundingClientRect()
      .exec((rect = []) => {
        resolve(rect[0])
      })
  })
}

const expanded = computed(() => {
  if (parent) {
    return parent.isExpanded(props.name)
  }
  return false
})

const initial = 'initial'
const wrapperHeight = ref(expanded.value ? initial : '0px')

const handleClick = () => {
  if (!inAnimation.value) {
    parent && parent.updateVal(props.name)
  }
}

const toggle = (open: boolean) => {
  // 连续切换状态时，清除打开的后续操作
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
    timeoutId.value = ''
  }
  const start = open ? '0px' : initial
  const end = open ? initial : '0px'
  inAnimation.value = true
  wrapperHeight.value = start
  setTimeout(() => {
    wrapperHeight.value = end
    inAnimation.value = false
    if (open) {
      timeoutId.value = setTimeout(() => {
        wrapperHeight.value = initial
      }, 300)
    }
  }, 100)
}

watch(expanded, toggle)
</script>
