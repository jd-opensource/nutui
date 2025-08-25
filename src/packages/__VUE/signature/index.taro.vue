<template>
  <view :class="classes">
    <div :class="['nut-signature-inner', 'spcanvas_WEAPP']">
      <canvas
        :id="canvasSetId"
        ref="spcanvas"
        class="spcanvas"
        :canvasId="canvasSetId"
        type="2d"
        disable-scroll="true"
        @touchstart="startEventHandler"
        @touchmove="moveEventHandler"
        @touchend="endEventHandler"
        @touchleave="leaveEventHandler"
      ></canvas>
    </div>
    <nut-button class="nut-signature-btn" type="default" @click="clear()">{{ translate('reSign') }}</nut-button>
    <nut-button class="nut-signature-btn" type="primary" @click="confirm()">{{ translate('confirm') }}</nut-button>
  </view>
</template>
<script lang="ts">
import Taro from '@tarojs/taro'
import { ref, reactive, onMounted, computed } from 'vue'
import { createComponent } from '@/packages/utils/create'
import NutButton from '../button/index.taro'
import { useLocale } from '@/packages/utils/useLocale'
const { create } = createComponent('signature')

const cN = 'NutSignature'

export default create({
  props: {
    customClass: {
      type: String,
      default: ''
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    strokeStyle: {
      type: String,
      default: '#000'
    },
    type: {
      type: String,
      default: 'png'
    },
    unSupportTpl: {
      type: String,
      default: ''
    }
  },
  components: {
    NutButton
  },
  emits: ['start', 'end', 'signing', 'confirm', 'clear'],

  setup(props, { emit }) {
    const translate = useLocale(cN)
    const classes = computed(() => {
      const prefixCls = 'nut-signature'
      return {
        [prefixCls]: true,
        [`${props.customClass}`]: props.customClass
      }
    })
    const spcanvas: any = ref<HTMLElement | null>(null)
    const canvasSetId: any = 'spcanvas' + new Date().getTime()

    const state = reactive({
      canvas: null,
      canvasHeight: 0,
      canvasWidth: 0,
      ctx: null as any
    })

    const startEventHandler = (event: TouchEvent) => {
      event.preventDefault()
      if (!state.ctx) {
        return false
      }
      emit('start')
      state.ctx.beginPath()
      state.ctx.lineWidth = props.lineWidth
      state.ctx.strokeStyle = props.strokeStyle
    }
    const isDraw = ref(false)
    const moveEventHandler = (event: TouchEvent) => {
      event.preventDefault()
      if (!state.ctx) {
        return false
      }
      let evt = event.changedTouches[0]
      isDraw.value = true
      emit('signing', evt)
      // @ts-ignore
      let mouseX = evt.x || evt.clientX
      // @ts-ignore
      let mouseY = evt.y || evt.clientY

      if (Taro.getEnv() === 'WEB') {
        const canvas = document.getElementById(canvasSetId)
        const coverPos = canvas?.getBoundingClientRect()
        if (coverPos) {
          mouseX = evt.clientX - coverPos.left
          mouseY = evt.clientY - coverPos.top
        }
      }
      Taro.nextTick(() => {
        state.ctx.lineCap = 'round'
        state.ctx.lineJoin = 'round'
        state.ctx?.lineTo(mouseX, mouseY)
        state.ctx?.stroke()
      })
    }

    const endEventHandler = (event: { preventDefault: () => void }) => {
      event.preventDefault()
      emit('end')
    }
    const leaveEventHandler = (event: { preventDefault: () => void }) => {
      event.preventDefault()
    }
    const clear = () => {
      state.ctx.clearRect(0, 0, state.canvasWidth, state.canvasHeight)
      state.ctx.closePath()

      emit('clear')
      isDraw.value = false
    }

    const confirm = () => {
      onSave()
    }

    const onSave = () => {
      if (!state.canvas) {
        return
      }
      Taro.createSelectorQuery()
        .select('#' + canvasSetId)
        .fields({
          node: true,
          size: true
        })
        .exec(async (res) => {
          Taro.canvasToTempFilePath({
            canvas: res[0].node,
            canvasId: canvasSetId,
            fileType: props.type as any,
            success: function (result) {
              const _canvas = !isDraw.value ? '请绘制签名' : state.canvas
              const _filePath = !isDraw.value ? '' : result.tempFilePath
              emit('confirm', _canvas, _filePath)
            },
            fail: function (result) {
              emit('confirm', result)
            }
          })
        })
    }

    onMounted(() => {
      Taro.nextTick(() => {
        setTimeout(() => {
          if (['WEAPP', 'JD', 'TT', 'SWAN', 'ALIPAY', 'QQ'].includes(Taro.getEnv())) {
            Taro.createSelectorQuery()
              .select('#' + canvasSetId)
              .fields(
                {
                  node: true,
                  size: true
                },
                function (res) {
                  const canvas = res.node
                  canvasSetting(canvas, res.width, res.height)
                }
              )
              .exec()
          } else {
            const canvasDom: HTMLElement | null = document.getElementById(canvasSetId)
            let canvas: HTMLCanvasElement = canvasDom as HTMLCanvasElement
            if (canvasDom?.tagName !== 'CANVAS') {
              canvas = canvasDom?.getElementsByTagName('canvas')[0] as HTMLCanvasElement
            }
            canvasSetting(canvas, canvasDom?.offsetWidth as number, canvasDom?.offsetHeight as number)
          }
        }, 1000)
      })
    })
    const canvasSetting = (canvasDom: any, width: number, height: number) => {
      const canvas = canvasDom
      const dpr = Taro.getSystemInfoSync().pixelRatio
      const ctx = canvas.getContext('2d')
      canvas.width = width * dpr
      canvas.height = height * dpr
      state.canvas = canvas
      ctx.scale(dpr, dpr)
      state.ctx = ctx
      state.canvasWidth = width * dpr
      state.canvasHeight = height * dpr
    }
    return {
      taroEnv: Taro.getEnv(),
      canvasSetId,
      spcanvas,
      confirm,
      clear,
      classes,
      startEventHandler,
      moveEventHandler,
      endEventHandler,
      leaveEventHandler,
      translate
    }
  }
})
</script>
