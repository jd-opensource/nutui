<template>
  <view class="nut-sku-stepper">
    <view class="nut-sku-stepper-title">{{ stepperTitle }}</view>
    <view class="nut-sku-stepper-limit" v-html="getExtraText()"></view>
    <view class="nut-sku-stepper-count">
      <nut-input-number
        v-model="goodsCount"
        :min="stepperMin"
        :max="stepperMax"
        @add="add"
        @reduce="reduce"
        @overlimit="overlimit"
        @change="changeStepper"
      />
    </view>
  </view>
</template>
<script lang="ts">
import { ref, onMounted } from 'vue'
import { createComponent } from '@/packages/utils/create'
import NutInputNumber from '../../inputnumber'
const { create } = createComponent('sku-stepper')
export default create({
  props: {
    // 购买数量最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },

    stepperMin: {
      type: [Number, String],
      default: 1
    },

    // stepper 前文案提示
    stepperExtraText: {
      type: [Function, Boolean],
      default: false
    },

    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: '购买数量'
    }
  },
  emits: ['click', 'changeSku', 'changeStepper', 'clickBtnOptions', 'overLimit', 'reduce', 'add'],
  components: {
    NutInputNumber
  },

  setup(props, { emit }) {
    const goodsCount = ref(props.stepperMin)

    onMounted(() => {
      goodsCount.value = props.stepperMin
    })

    const getExtraText = () => {
      const { stepperExtraText } = props

      if (stepperExtraText) {
        if (stepperExtraText === true) {
          return ''
        }
        return stepperExtraText?.()
      }
    }

    // 修改购买数量 add 加  reduce 减
    const add = (value: number) => {
      emit('add', value)
    }

    const reduce = (value: number) => {
      emit('reduce', value)
    }

    // stepper 极限值
    const overlimit = (e: Event, action: string) => {
      emit('overLimit', {
        action,
        value: parseInt(goodsCount.value + '')
      })
    }
    // stepper 发生了改变
    const changeStepper = (value: number) => {
      goodsCount.value = value

      emit('changeStepper', value)
    }

    return {
      goodsCount,
      add,
      reduce,
      overlimit,
      getExtraText,
      changeStepper
    }
  }
})
</script>
