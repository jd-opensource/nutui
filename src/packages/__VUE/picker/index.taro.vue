<template>
  <view class="nut-picker">
    <view v-if="showToolbar" class="nut-picker__bar">
      <view class="nut-picker__cancel nut-picker__left nut-picker__button" @click="cancel">
        {{
          cancelText || translate('cancel')
        }}
      </view>
      <view class="nut-picker__title"> {{ title }}</view>
      <view class="nut-picker__confirm nut-picker__right nut-picker__button" @click="confirmHandler">
        {{
          okText || translate('confirm')
        }}
      </view>
    </view>
    <slot name="top"></slot>

    <!-- Taro 下转换成 微信小程序 -->
    <picker-view
      v-if="ENV != ENV_TYPE.WEB"
      :indicator-style="`height:${optionHeight}px`"
      :value="defaultIndexes"
      :style="pickerViewStyles"
      v-bind="$attrs"
      :immediate-change="true"
      @change="tileChange"
      @pickstart="handlePickstart"
      @pickend="handlePickend"
    >
      <picker-view-column
        v-for="(column, columnIndex) in columnsList"
        :key="columnIndex"
        :filed-names="columnFieldNames"
      >
        <view
          v-for="(item, index) in column"
          :key="item[columnFieldNames.value] ?? index"
          class="nut-picker-roller-item-tarotile"
          :class="{
            [item[columnFieldNames.className]]: item[columnFieldNames.className],
            'nut-picker-roller-item-tarotile--selected': index === defaultIndexes[columnIndex]
          }"
          :style="{
            lineHeight: pxCheck(optionHeight)
          }"
        >
          {{ item[columnFieldNames.text] }}
        </view>
      </picker-view-column>
    </picker-view>

    <!-- Taro 下转换成 H5 -->
    <view v-else class="nut-picker__column" :style="pickerViewStyles">
      <view v-for="(column, columnIndex) in columnsList" :key="columnIndex" class="nut-picker__columnitem">
        <nut-picker-column
          :ref="swipeRef"
          :column="column"
          :columns-type="columnsType"
          :field-names="columnFieldNames"
          :value="defaultValues[columnIndex]"
          :three-dimensional="false"
          :swipe-duration="swipeDuration"
          :visible-option-num="visibleOptionNum"
          :option-height="optionHeight"
          taro
          @change="
            (option: any) => {
              changeHandler(columnIndex, option)
            }
          "
        ></nut-picker-column>
      </view>
    </view>
    <slot name="default"></slot>
  </view>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create'
import Taro from '@tarojs/taro'
import { ref, reactive, computed, CSSProperties, toRefs } from 'vue'
import { pxCheck } from '@/packages/utils/pxCheck'
import { usePicker } from './usePicker'
import NutPickerColumn from './Column.vue'
import baseProps from './baseProps'
import { useLocale } from '@/packages/utils/useLocale'
const { create } = createComponent('picker')

const cN = 'NutPicker'

export default create({
  components: {
    NutPickerColumn
  },
  props: baseProps,
  emits: ['cancel', 'change', 'confirm', 'update:modelValue'],
  setup(props, { emit }) {
    const translate = useLocale(cN)
    const {
      changeHandler,
      confirm,
      defaultValues,
      defaultIndexes,
      columnsList,
      columnsType,
      columnFieldNames,
      cancel
    } = usePicker(props, emit)
    const state = reactive({
      show: false,
      picking: false,
      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    })

    const pickerColumn = ref<any[]>([])

    const swipeRef = (el: any) => {
      if (el && pickerColumn.value.length < columnsList.value.length) {
        pickerColumn.value.push(el)
      }
    }

    const confirmHandler = () => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        pickerColumn.value.length > 0
        && pickerColumn.value.forEach((column) => {
          column.stopMomentum()
        })
        confirm()
      } else {
        if (state.picking) {
          setTimeout(() => {
            confirm()
          }, 0)
        } else {
          confirm()
        }
      }
    }

    const pickerViewStyles = computed(() => {
      const styles: CSSProperties = {}
      styles.height = `${+props.visibleOptionNum * +props.optionHeight}px`
      styles['--lineHeight'] = `${+props.optionHeight}px`
      return styles
    })

    // 平铺展示时，滚动选择
    const tileChange = (data: any) => {
      const prevDefaultValue = defaultIndexes.value
      let changeIndex = 0
      // 判断变化的是第几个
      for (let i = 0; i < data.detail.value?.length; i++) {
        if (prevDefaultValue[i] !== data.detail.value?.[i]) {
          changeIndex = i
          break
        }
      }

      // 选择的是哪个 option
      changeHandler(changeIndex, columnsList.value[changeIndex][data.detail.value[changeIndex]])
    }

    // 开始滚动
    const handlePickstart = () => {
      state.picking = true
    }
    // 开始滚动
    const handlePickend = () => {
      state.picking = false
    }

    return {
      ...toRefs(state),
      columnsType,
      columnsList,
      columnFieldNames,
      cancel,
      changeHandler,
      confirmHandler,
      defaultValues,
      pickerColumn,
      swipeRef,
      defaultIndexes,
      tileChange,
      handlePickstart,
      translate,
      handlePickend,
      pickerViewStyles,
      pxCheck
    }
  }
})
</script>
