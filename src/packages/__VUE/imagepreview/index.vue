<template>
  <nut-popup
    v-model:visible="showPop"
    pop-class="nut-image-preview-custom-pop"
    :teleport-disable="teleportDisable"
    :teleport="teleport"
    lock-scroll
    @closed="onClose"
  >
    <view ref="swipeRef" class="nut-image-preview">
      <nut-swiper
        v-if="showPop"
        :auto-play="autoplay"
        class="nut-image-preview-swiper"
        :loop="isLoop"
        :is-prevent-default="false"
        direction="horizontal"
        :init-page="initNo"
        :pagination-visible="paginationVisible"
        :pagination-color="paginationColor"
        @change="setActive"
      >
        <image-preview-item
          v-for="(item, index) in mergeImages"
          :key="index"
          :video="index < videos.length ? item : {}"
          :image="index >= videos.length ? item : {}"
          :root-height="rootHeight"
          :root-width="rootWidth"
          :show="showPop"
          :init-no="active + 1"
          :content-close="contentClose"
          :max-zoom="maxZoom"
          :min-zoom="minZoom"
          @close="onClose"
        ></image-preview-item>
      </nut-swiper>
    </view>
    <view v-if="showIndex" class="nut-image-preview-index"> {{ active + 1 }} / {{ mergeImages.length }} </view>

    <view v-if="closeable" :class="iconClasses" @click="onClose">
      <slot name="close-icon"><CircleClose color="#ffffff"></CircleClose></slot>
    </view>
  </nut-popup>
</template>
<script lang="ts">
import { toRefs, reactive, watch, onMounted, ref, computed, nextTick } from 'vue'
import type { PropType } from 'vue'
import { createComponent } from '@/packages/utils/create'
import { isArray } from '@/packages/utils/util'
import { funInterceptor, Interceptor } from '@/packages/utils/util'
import { useRect } from '@/packages/utils/useRect'
import ImagePreviewItem from './imagePreviewItem.vue'
import { ImageInterface, baseProps } from './types'
const { create } = createComponent('image-preview')
import { CircleClose } from '@nutui/icons-vue'
import NutPopup from '../popup/index.vue'
import NutSwiper from '../swiper/index.vue'

export default create({
  props: {
    ...baseProps,
    images: { type: Array as PropType<ImageInterface[]>, default: () => [] },
    videos: { type: Array, default: () => [] },
    contentClose: { type: Boolean, default: true },
    paginationVisible: { type: Boolean, default: false },
    paginationColor: { type: String, default: '#fff' },
    autoplay: { type: [Number, String], default: 0 },
    teleport: { type: [String, Element], default: 'body' },
    teleportDisable: { ype: Boolean, default: false },
    closeable: {
      type: Boolean,
      default: false
    },
    closeIconPosition: {
      type: String,
      default: 'top-right' // top-right  top-left
    },
    beforeClose: Function as PropType<Interceptor>,
    isLoop: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close', 'change'],
  components: {
    ImagePreviewItem: ImagePreviewItem,
    CircleClose,
    NutPopup,
    NutSwiper
  },

  setup(props, { emit }) {
    const swipeRef = ref()

    const state = reactive({
      showPop: props.show,
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    })

    const iconClasses = computed(() => {
      const pre = 'nut-image-preview-close'
      const iconn = props.closeIconPosition == 'top-right' ? `${pre}-right` : `${pre}-left`
      return `nut-image-preview-close-icon ${iconn}`
    })

    const mergeImages = computed(() => {
      if (isArray(props.videos)) {
        return ([] as any).concat(props.videos).concat(props.images)
      }
      return props.images
    })

    // 设置当前选中第几个
    const setActive = (active: number) => {
      if (active !== state.active) {
        state.active = active
        emit('change', state.active)
      }
    }

    const onClose = () => {
      funInterceptor(props.beforeClose, {
        args: [state.active],
        done: () => closeDone()
      })
    }

    // 执行关闭
    const closeDone = () => {
      state.showPop = false
      emit('close')
    }

    const init = () => {
      if (swipeRef.value) {
        const rect = useRect(swipeRef.value)
        state.rootHeight = rect.height
        state.rootWidth = rect.width
      }
    }

    watch(
      () => props.show,
      (val) => {
        state.showPop = val

        if (val) {
          setActive(props.initNo)
          nextTick(() => {
            init()
          })
        }
      }
    )

    watch(
      () => props.initNo,
      (val) => {
        if (val != state.active) setActive(val)
      }
    )

    onMounted(() => {
      setActive(props.initNo)
    })

    return {
      swipeRef,
      ...toRefs(state),
      onClose,
      mergeImages,
      setActive,
      iconClasses
    }
  }
})
</script>
