<template>
  <view :class="classes" :style="{
    zIndex,
    backgroundSize: `${gapX + width}px`,
    backgroundImage: `url('${base64Url}')`
  }">
  </view>
</template>
<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'

defineOptions({
  name: 'NutWatermark'
})

export type WatermarkProps = Partial<{
  gapX: number
  gapY: number
  zIndex: number
  width: number
  height: number
  rotate: number
  image: string
  imageWidth: number
  imageHeight: number
  content: string | string[]
  fontColor: string
  fontStyle: string
  fontFamily: string
  fontWeight: string
  fontSize: string | number
  fullPage: boolean
}>

const props = withDefaults(defineProps<WatermarkProps>(), {
  gapX: 24,
  gapY: 48,
  zIndex: 2000,
  width: 120,
  height: 64,
  rotate: -22,
  imageWidth: 120,
  imageHeight: 64,
  content: '',
  fontColor: 'rgba(0,0,0,.15)',
  fontStyle: 'normal',
  fontFamily: 'PingFang SC',
  fontWeight: 'normal',
  fontSize: 14,
  fullPage: true
})

const base64Url = ref('')

const classes = computed(() => {
  const prefixCls = 'nut-watermark'
  return {
    [prefixCls]: true,
    [`${prefixCls}-full-page`]: props.fullPage
  }
})

const init = () => {
  const canvas = document.createElement('canvas')
  const ratio = window.devicePixelRatio
  const ctx = canvas.getContext('2d')
  const canvasWidth = `${(props.gapX + props.width) * ratio}px`
  const canvasHeight = `${(props.gapY + props.height) * ratio}px`
  const markWidth = props.width * ratio
  const markHeight = props.height * ratio
  canvas.setAttribute('width', canvasWidth)
  canvas.setAttribute('height', canvasHeight)

  if (ctx) {
    if (props.image) {
      ctx.translate(markWidth / 2, markHeight / 2)
      ctx.rotate((Math.PI / 180) * Number(props.rotate))

      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.referrerPolicy = 'no-referrer'
      img.src = props.image
      img.onload = () => {
        ctx.drawImage(
          img,
          (-props.imageWidth * ratio) / 2,
          (-props.imageHeight * ratio) / 2,
          props.imageWidth * ratio,
          props.imageHeight * ratio
        )
        ctx.restore()
        base64Url.value = canvas.toDataURL()
      }
    } else if (props.content) {
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      // 文字绕中间旋转
      ctx.translate(markWidth / 2, markHeight / 2)
      ctx.rotate((Math.PI / 180) * Number(props.rotate))

      const markSize = Number(props.fontSize) * ratio
      ctx.font = `${props.fontStyle} normal ${props.fontWeight} ${markSize}px/${markHeight}px ${props.fontFamily}`
      ctx.fillStyle = props.fontColor
      if (Array.isArray(props.content)) {
        props.content.map((item, index) => {
          ctx.fillText(item, 0, (index - 1) * markSize)
        })
      } else {
        ctx.fillText(props.content, 0, 0)
      }
      ctx.restore()
      base64Url.value = canvas.toDataURL()
    }
  } else {
    throw new Error('当前环境不支持Canvas')
  }
}

watchEffect(() => {
  init()
})
</script>
