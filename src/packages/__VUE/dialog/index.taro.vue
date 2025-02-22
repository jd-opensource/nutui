<template>
  <nut-popup
    v-model:visible="showPopup"
    :teleport="teleport"
    :close-on-click-overlay="false"
    :lock-scroll="lockScroll"
    :catch-move="lockScroll"
    :pop-class="popClass"
    :overlay-class="overlayClass"
    :overlay-style="overlayStyle"
    :style="popStyle"
    round
    :z-index="zIndex"
    @click-overlay="onClickOverlay"
    @click-close-icon="closed"
  >
    <view :class="['nut-dialog', customClass]">
      <view v-if="$slots.header || title" class="nut-dialog__header">
        <slot v-if="$slots.header" name="header"></slot>
        <template v-else>{{ title }}</template>
      </view>

      <view class="nut-dialog__content" :style="contentStyle">
        <slot v-if="$slots.default" name="default"></slot>
        <view v-else-if="typeof content === 'string'" v-html="content"></view>
        <component :is="content" v-else />
      </view>

      <view v-if="!noFooter" class="nut-dialog__footer" :class="{ [footerDirection]: footerDirection }">
        <slot v-if="$slots.footer" name="footer"></slot>
        <template v-else>
          <nut-button
            v-if="!noCancelBtn"
            size="small"
            plain
            type="primary"
            class="nut-dialog__footer-cancel"
            @click="onCancel"
          >
            {{ cancelText || translate('cancel') }}
          </nut-button>
          <nut-button v-if="!noOkBtn" size="small" type="primary" class="nut-dialog__footer-ok" @click="onOk">
            {{ okText || translate('confirm') }}
          </nut-button>
        </template>
      </view>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { onMounted, computed, watch, ref, PropType, VNode, CSSProperties } from 'vue'
import { createComponent } from '@/packages/utils/create'
import { popupProps } from '../popup/props'
import NutPopup from '../popup/index.taro.vue'
import NutButton from '../button/index.taro'
import { isPromise } from '@/packages/utils/util'
import { useLocale } from '@/packages/utils/useLocale'

const { create } = createComponent('dialog')
const cN = 'NutDialog'

export default create({
  inheritAttrs: false,
  components: {
    NutPopup,
    NutButton
  },
  props: {
    ...popupProps,
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: [String, Object] as PropType<string | VNode>,
      default: ''
    },
    noFooter: {
      type: Boolean,
      default: false
    },
    noOkBtn: {
      type: Boolean,
      default: false
    },
    noCancelBtn: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: ''
    },
    cancelAutoClose: {
      type: Boolean,
      default: true
    },
    okAutoClose: {
      type: Boolean,
      default: true
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    closeOnPopstate: {
      type: Boolean,
      default: false
    },
    footerDirection: {
      type: String,
      default: 'horizontal' // vertical
    },
    customClass: {
      type: String,
      default: ''
    },
    popStyle: {
      type: Object as PropType<CSSProperties>
    },
    beforeClose: {
      type: Function
    }
  },
  emits: ['update', 'update:visible', 'ok', 'cancel', 'opened', 'closed'],
  setup(props, { emit }) {
    const translate = useLocale(cN)
    const showPopup = ref(props.visible)
    onMounted(() => {
      if (props.closeOnPopstate) {
        window.addEventListener('popstate', function () {
          closed('page')
        })
      }
    })

    watch(
      () => props.visible,
      (value) => {
        showPopup.value = value
        if (value) {
          emit('opened')
        }
      }
    )

    const update = (val: boolean) => {
      emit('update', val)
      emit('update:visible', val)
    }

    const closed = (action: string) => {
      if (props.beforeClose) {
        const result = props.beforeClose(action)
        if (isPromise(result)) {
          result.then((bool) => {
            if (bool) {
              update(false)
              emit('closed')
            } else {
              // 用户阻止删除
            }
          })
        }
      } else {
        update(false)
        emit('closed')
      }
    }

    const onCancel = () => {
      emit('cancel')
      if (props.cancelAutoClose) {
        closed('cancel')
      }
    }

    const onOk = () => {
      emit('ok')
      if (props.okAutoClose) {
        closed('ok')
      }
    }

    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        closed('')
      }
    }

    const contentStyle = computed(() => {
      return {
        textAlign: props.textAlign
      } as CSSProperties
    })

    return {
      closed,
      onCancel,
      onOk,
      showPopup,
      onClickOverlay,
      contentStyle,
      translate
    }
  }
})
</script>
