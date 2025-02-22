<template>
  <view v-if="info && Object.keys(info)" class="nut-comment">
    <!-- 根据展示信息的多少，分为3种展示风格：simple，base，complex -->
    <comment-header :type="headerType" :info="info" :labels="labels" @handle-click="handleClick">
      <template #labels>
        <slot name="comment-labels"></slot>
      </template>
    </comment-header>

    <slot name="feature"></slot>

    <view
      class="nut-comment__main"
      :style="`-webkit-line-clamp:${conEllipsis}`"
      @click="handleClick"
      v-html="info.content"
    ></view>

    <comment-images :images="images" :videos="videos" :type="imagesRows" @click-images="clickImages"></comment-images>

    <view v-if="follow && follow.days > 0" class="nut-comment__follow" @click="handleClick">
      <view class="nut-comment__follow-title">{{ translate('additionalReview', follow.days) }}</view>
      <view class="nut-comment__follow-com">{{ follow.content }}</view>
      <view
        v-if="follow.images && follow.images.length > 0"
        class="nut-comment__follow-img"
        @click="clickImages(follow.images)"
      >
        {{ translate('additionalImages', follow.images.length) }} <Right width="12px"></Right
        >
      </view>
    </view>

    <comment-bottom
      :type="headerType"
      :info="info"
      :operation="operation"
      @click-operate="clickOperate"
      @handle-click="handleClick"
    ></comment-bottom>

    <slot name="comment-shop-reply"></slot>
  </view>
</template>
<script lang="ts">
import { computed, PropType } from 'vue'
import { Right } from '@nutui/icons-vue'
import { createComponent } from '@/packages/utils/create'
import CommentHeader from './components/CmtHeader.vue'
import CommentImages from './components/CmtImages.vue'
import CommentBottom from './components/CmtBottom.vue'
import { useLocale } from '@/packages/utils/useLocale'
import { VideosType, ImagesType } from './type'

const { create } = createComponent('comment')
const cN = 'NutComment'

export default create({
  props: {
    headerType: {
      type: String,
      default: 'default' // 头部展示风格 default，complex
    },

    imagesRows: {
      type: String,
      default: 'one' // 'one'  'multi'
    },

    ellipsis: {
      type: [String, Number, Boolean],
      default: false
    },

    videos: {
      type: Array as PropType<VideosType[]>,
      default: () => []
    },
    images: {
      type: Array as PropType<ImagesType[]>,
      default: () => []
    },

    info: {
      type: Object,
      default: () => ({})
    },

    follow: {
      type: Object,
      default: () => ({})
    },

    labels: {
      type: Function,
      default: () => ''
    },

    operation: {
      type: Array as PropType<string[]>,
      default: ['replay', 'like', 'more']
    }
  },
  components: {
    CommentHeader,
    CommentImages,
    CommentBottom,
    Right
  },
  emits: ['click', 'clickImages', 'clickOperate'],

  setup(props, { emit }) {
    const translate = useLocale(cN)
    const conEllipsis = computed(() => {
      if (props.ellipsis) return props.ellipsis

      return props.headerType == 'complex' ? 6 : 2
    })
    const clickOperate = (t: string) => {
      emit('clickOperate', t)
    }

    const handleClick = () => {
      emit('click', props.info)
    }

    const clickImages = (value: any) => {
      emit('clickImages', value)
    }

    return { conEllipsis, clickOperate, handleClick, clickImages, translate }
  }
})
</script>
