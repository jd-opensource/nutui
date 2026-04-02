<template>
  <view class="nut-table">
    <view class="nut-table__main" :class="{ 'nut-table__main--striped': striped }">
      <view class="nut-table__main__head">
        <view class="nut-table__main__head__tr">
          <span
            v-for="item in columns"
            :key="item.key"
            class="nut-table__main__head__tr__th"
            :class="cellClasses(item)"
            :style="item.stylehead"
            @click="handleSorterClick(item)"
          >
            {{ item.title }}
            <slot name="icon"></slot>
            <DownArrow v-if="!$slots.icon && item.sorter" width="12px" height="12px"></DownArrow>
          </span>
        </view>
      </view>
      <view class="nut-table__main__body">
        <view v-for="item in curData" :key="item" class="nut-table__main__body__tr">
          <span
            v-for="[value, render] in sortDataItem()"
            :key="value"
            class="nut-table__main__body__tr__td"
            :class="cellClasses(getColumnItem(value))"
            :style="getColumnItemStyle(value)"
          >
            <RenderColumn
              v-if="typeof item[value] === 'function' || typeof render === 'function'"
              :slots="[render, item[value]]"
              :record="item"
            ></RenderColumn>
            <view v-else>
              {{ item[value] }}
            </view>
          </span>
        </view>
      </view>
    </view>
    <view v-if="!curData.length" class="nut-table__nodata">
      <div class="nut-table__nodata" :class="{ 'nut-table__nodata--border': bordered }">
        <slot name="nodata"></slot>
        <div v-if="!$slots.nodata" class="nut-table__nodata__text"> {{ translate('noData') }} </div>
      </div>
    </view>
    <view v-if="summary" class="nut-table__summary">
      <span class="nut-table__summary__text" v-html="summary().value"></span>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType, reactive, toRefs, watch } from 'vue'
import { createComponent } from '@/packages/utils/create'
const { create } = createComponent('table')
import RenderColumn from './renderColumn'
import { DownArrow } from '@nutui/icons-vue'
import { TableColumns } from './types'
import { useLocale } from '@/packages/utils/useLocale'

const cN = 'NutTable'

export default create({
  components: {
    RenderColumn,
    DownArrow
  },
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array as PropType<TableColumns[]>,
      default: () => []
    },
    data: {
      type: Object as PropType<any>,
      default: () => ({})
    },
    summary: {
      type: Function,
      default: null
    },
    striped: {
      type: Boolean,
      default: false
    }
  },
  emits: ['sorter'],
  setup(props, { emit }) {
    const translate = useLocale(cN)

    const state = reactive({
      curData: props.data
    })

    const cellClasses = (item: TableColumns) => {
      return {
        'nut-table__main__head__tr--border': props.bordered,
        [`nut-table__main__head__tr--align${item.align ? item.align : ''}`]: true
      }
    }

    const stylehead = (item: TableColumns) => {
      return item.stylehead ? item.stylehead : ''
    }
    const stylecolumn = (item: TableColumns) => {
      return item.stylecolumn ? item.stylecolumn : ''
    }

    const getColumnItem = (value: string): TableColumns => {
      return props.columns.filter((item: TableColumns) => item.key === value)[0]
    }
    const getColumnItemStyle = (value: string) => {
      const style = props.columns.filter((item: TableColumns) => item.key === value)
      return style[0].stylecolumn ? style[0].stylecolumn : ''
    }
    const handleSorterClick = (item: TableColumns) => {
      if (item.sorter) {
        emit('sorter', item)
        state.curData
          = typeof item.sorter === 'function'
            ? state.curData.sort(item.sorter)
            : item.sorter === 'default'
              ? state.curData.sort()
              : state.curData
      }
    }

    const sortDataItem = () => {
      return props.columns.map((columns: TableColumns) => {
        return [columns.key, columns.render]
      }) as [string, any][]
    }

    watch(
      () => props.data,
      (val) => {
        state.curData = val.slice()
      },
	  {deep: true}
    )

    return {
      ...toRefs(state),
      cellClasses,
      getColumnItem,
      getColumnItemStyle,
      handleSorterClick,
      sortDataItem,
      translate,
      stylehead,
      stylecolumn
    }
  }
})
</script>
