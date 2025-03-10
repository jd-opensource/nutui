<template>
  <div class="nut-address-list-item" @click="contentsClick">
    <div class="nut-address-list-item__info">
      <div class="nut-address-list-item__info-contact">
        <slot name="content-top">
          <div class="nut-address-list-item__info-contact-name">{{ item.addressName }}</div>
          <div class="nut-address-list-item__info-contact-tel">{{ item.phone }}</div>
          <div v-if="item.defaultAddress" class="nut-address-list-item__info-contact-default">
            {{
              translate('default')
            }}
          </div>
        </slot>
      </div>
      <div class="nut-address-list-item__info-handle">
        <slot name="content-icon">
          <Del name="del" class="nut-address-list-item__info-handle-del" @click="delClick"></Del>
          <Edit name="edit" class="nut-address-list-item__info-handle-edit" @click="editClick"></Edit>
        </slot>
      </div>
    </div>
    <div class="nut-address-list-item__addr">
      <slot name="content-addr">
        {{ item.fullAddress }}
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create'
import { useLocale } from '@/packages/utils/useLocale'
const { create } = createComponent('address-list-item')
import { Del, Edit } from '@nutui/icons-vue'

const cN = 'NutAddressList'

export default create({
  components: { Del, Edit },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  emits: ['delIcon', 'editIcon', 'clickItem'],

  setup(props, { emit }) {
    const translate = useLocale(cN)
    const delClick = (event: Event) => {
      emit('delIcon', event, props.item)
      event.stopPropagation()
    }
    const editClick = (event: Event) => {
      emit('editIcon', event, props.item)
      event.stopPropagation()
    }
    const contentsClick = (event: Event) => {
      emit('clickItem', event, props.item)
      event.stopPropagation()
    }

    return {
      delClick,
      editClick,
      contentsClick,
      translate
    }
  }
})
</script>
