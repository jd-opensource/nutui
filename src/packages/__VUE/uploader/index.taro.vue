<template>
  <view class="nut-uploader">
    <view v-if="$slots.default" class="nut-uploader__slot">
      <slot></slot>
      <template v-if="Number(maximum) - fileList.length">
        <nut-button class="nut-uploader__input" @click="chooseImage" />
      </template>
    </view>

    <view v-for="(item, index) in fileList" :key="item.uid" class="nut-uploader__preview" :class="[listType]">
      <view v-if="listType == 'picture' && !$slots.default" class="nut-uploader__preview-img">
        <view v-if="item.status != 'success'" class="nut-uploader__preview__progress">
          <template v-if="item.status != 'ready'">
            <Failure v-if="item.status == 'error'" color="#fff" />
            <Loading v-else name="loading" color="#fff" />
          </template>
          <view class="nut-uploader__preview__progress__msg">{{ item.message }}</view>
        </view>

        <view v-if="isDeletable" class="close" @click="onDelete(item, index)">
          <slot name="delete-icon"> <Failure /></slot>
        </view>

        <img
          v-if="(item?.type?.includes('image') || item?.type?.includes('video')) && item.url"
          class="nut-uploader__preview-img__c"
          :mode="mode"
          :src="item.url"
          @click="fileItemClick(item)"
        />
        <view v-else class="nut-uploader__preview-img__file">
          <view class="nut-uploader__preview-img__file__name" @click="fileItemClick(item)">
            <view class="file__name_tips">{{ item.name }}</view>
          </view>
        </view>
        <view class="tips">{{ item.name }}</view>
      </view>
      <view v-else-if="listType == 'list'" class="nut-uploader__preview-list">
        <view class="nut-uploader__preview-img__file__name" :class="[item.status]" @click="fileItemClick(item)">
          <Link class="nut-uploader__preview-img__file__link" />
          <view class="file__name_tips">{{ item.name }}</view>
          <Del
            v-if="isDeletable"
            color="#808080"
            class="nut-uploader__preview-img__file__del"
            @click.stop="onDelete(item, index)"
          ></Del>
        </view>

        <nut-progress
          v-if="item.status == 'uploading'"
          size="small"
          :percentage="item.percentage"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          :show-text="false"
        >
        </nut-progress>
      </view>
    </view>
    <view
      v-if="listType == 'picture' && !$slots.default && Number(maximum) - fileList.length"
      class="nut-uploader__upload"
      :class="[listType]"
    >
      <slot name="upload-icon">
        <Photograph color="#808080" />
      </slot>
      <nut-button class="nut-uploader__input" :class="{ disabled }" @click="chooseImage" />
    </view>
  </view>
</template>

<script lang="ts">
import { PropType, reactive, ref, toRef, watch } from 'vue'
import { createComponent } from '@/packages/utils/create'
import { UploaderTaro, UploadOptions } from './uploader'
import { FileItem, MediaType, SizeType, SourceType } from './type'
import { funInterceptor, Interceptor } from '@/packages/utils/util'
import NutProgress from '../progress/index.taro'
import NutButton from '../button/index.taro'
import Taro from '@tarojs/taro'
import { Photograph, Failure, Loading, Del, Link } from '@nutui/icons-vue-taro'
import { useLocale } from '@/packages/utils/useLocale'
import { useFormDisabled } from '../form/common'

const { create } = createComponent('uploader')
const cN = 'NutUploader'

export default create({
  components: {
    NutProgress,
    NutButton,
    Photograph,
    Failure,
    Loading,
    Del,
    Link
  },
  props: {
    name: { type: String, default: 'file' },
    url: { type: String, default: '' },
    sizeType: {
      type: Array as PropType<SizeType[]>,
      default: () => ['original', 'compressed']
    },
    sourceType: {
      type: Array as PropType<SourceType[]>,
      default: () => ['album', 'camera']
    },
    mediaType: {
      type: Array as PropType<MediaType[]>,
      default: () => ['image', 'video', 'mix']
    },
    camera: {
      type: String,
      default: 'back'
    },

    timeout: { type: [Number, String], default: 1000 * 30 },
    // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
    fileList: { type: Array as PropType<any[]>, default: () => [] },
    isPreview: { type: Boolean, default: true },
    // picture、list
    listType: { type: String, default: 'picture' },
    isDeletable: { type: Boolean, default: true },
    method: { type: String, default: 'post' },
    capture: { type: Boolean, default: false },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 9 },
    clearInput: { type: Boolean, default: true },
    accept: { type: String, default: '*' },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    xhrState: { type: [Number, String], default: 200 },
    multiple: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    autoUpload: { type: Boolean, default: true },
    maxDuration: { type: Number, default: 10 },
    beforeUpload: {
      type: Function,
      default: null
    },
    beforeXhrUpload: {
      type: Function,
      default: null
    },
    beforeDelete: {
      type: Function as PropType<Interceptor>,
      default: () => {
        return true
      }
    },
    onChange: { type: Function },
    mode: {
      type: String,
      default: 'aspectFit'
    }
  },
  emits: [
    'start',
    'progress',
    'oversize',
    'success',
    'failure',
    'change',
    'delete',
    'update:fileList',
    'fileItemClick'
  ],
  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, 'disabled'))
    const translate = useLocale(cN)
    const fileList = ref(props.fileList as Array<FileItem>)
    const uploadQueue = ref<Promise<UploaderTaro>[]>([])

    watch(
      () => props.fileList,
      () => {
        fileList.value = props.fileList
      }
    )

    const chooseImage = () => {
      if (disabled.value) {
        return
      }

      if (Taro.getEnv() == 'WEB') {
        let el = document.getElementById('taroChooseImage')
        if (el) {
          el?.setAttribute('accept', props.accept)
        } else {
          const obj = document.createElement('input')
          obj.setAttribute('type', 'file')
          obj.setAttribute('id', 'taroChooseImage')
          obj.setAttribute('accept', props.accept)
          obj.setAttribute('style', 'position: fixed; top: -4000px; left: -3000px; z-index: -300;')
          document.body.appendChild(obj)
        }
      }
      if (Taro.getEnv() == 'WEAPP') {
        // chooseMedia 目前只支持微信小程序原生，其余端全部使用 chooseImage API
        Taro.chooseMedia({
          /** 最多可以选择的文件个数 */
          count: props.multiple ? Number(props.maximum) - fileList.value.length : 1,
          /** 文件类型 */
          mediaType: props.mediaType as any,
          /** 图片和视频选择的来源 */
          sourceType: props.sourceType,
          /** 拍摄视频最长拍摄时间，单位秒。时间范围为 3s 至 30s 之间 */
          maxDuration: props.maxDuration,
          /** 仅对 mediaType 为 image 时有效，是否压缩所选文件 */
          sizeType: props.sizeType,
          /** 仅在 sourceType 为 camera 时生效，使用前置或后置摄像头 */
          camera: props.camera,
          /** 接口调用失败的回调函数 */
          fail: (res: TaroGeneral.CallbackResult) => {
            emit('failure', res)
          },
          /** 接口调用成功的回调函数 */
          success: onChangeMedia
        })
      } else {
        Taro.chooseImage({
          // 选择数量
          count: props.multiple ? Number(props.maximum) - fileList.value.length : 1,
          // 可以指定是原图还是压缩图，默认二者都有
          sizeType: props.sizeType,
          sourceType: props.sourceType,
          success: onChangeImage,
          fail: (res: any) => {
            emit('failure', res)
          }
        })
      }
    }

    const onChangeMedia = (res: Taro.chooseMedia.SuccessCallbackResult) => {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      const { tempFiles } = res
      const _files: Taro.chooseMedia.ChooseMedia[] = filterFiles<Taro.chooseMedia.ChooseMedia>(tempFiles)

      if (props.beforeUpload) {
        props.beforeUpload(new Array<File>().slice.call(_files)).then(
          (f: Array<File> | boolean) => {
            const _files: File[] = filterFiles(new Array<File>().slice.call(f))
            if (!_files.length) res.tempFiles = []
            readFile(_files)
          }
        )
      } else {
        readFile(_files)
      }
      emit('change', {
        fileList: fileList.value
      })
    }
    const onChangeImage = (res: Taro.chooseImage.SuccessCallbackResult) => {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      const { tempFiles } = res
      const _files: Taro.chooseImage.ImageFile[] = filterFiles<Taro.chooseImage.ImageFile>(tempFiles)
      if (props.beforeUpload) {
        props.beforeUpload(new Array<File>().slice.call(_files)).then(
          (f: Array<File> | boolean) => {
            const _files: File[] = filterFiles(new Array<File>().slice.call(f))
            if (!_files.length) res.tempFiles = []
            readFile(_files)
          }
        )
      } else {
        readFile(_files)
      }
      emit('change', {
        fileList: fileList.value
      })
    }

    const fileItemClick = (fileItem: FileItem) => {
      emit('fileItemClick', { fileItem })
    }

    const executeUpload = (fileItem: FileItem, index: number) => {
      const uploadOption = new UploadOptions()

      if (Taro.getEnv() == 'WEB') {
        const formData = new FormData()
        for (const [key, value] of Object.entries(props.data)) {
          formData.append(key, value)
        }
        formData.append(props.name, fileItem.sourceFile!)
        uploadOption.formData = formData
      } else {
        uploadOption.formData = props.data as FormData
      }

      uploadOption.name = props.name
      uploadOption.url = props.url
      uploadOption.fileType = fileItem.type
      uploadOption.timeout = (props.timeout as number) * 1
      uploadOption.method = props.method
      uploadOption.xhrState = props.xhrState as number
      uploadOption.method = props.method
      uploadOption.headers = props.headers
      uploadOption.taroFilePath = fileItem.path
      uploadOption.beforeXhrUpload = props.beforeXhrUpload
      uploadOption.onStart = (option: UploadOptions) => {
        fileItem.status = 'ready'
        fileItem.message = translate('readyUpload')
        clearUploadQueue(index)
        emit('start', option)
      }
      uploadOption.onProgress = (event: any, option: UploadOptions) => {
        fileItem.status = 'uploading'
        fileItem.message = translate('uploading')
        fileItem.percentage = event.progress
        emit('progress', { event, option, percentage: fileItem.percentage })
      }

      uploadOption.onSuccess = (data: Taro.uploadFile.SuccessCallbackResult, option: UploadOptions) => {
        fileItem.status = 'success'
        fileItem.message = translate('success')
        emit('success', {
          data,
          responseText: data,
          option,
          fileItem
        })
        emit('update:fileList', fileList.value)
      }
      uploadOption.onFailure = (data: Taro.uploadFile.SuccessCallbackResult, option: UploadOptions) => {
        fileItem.status = 'error'
        fileItem.message = translate('error')
        emit('failure', {
          data,
          responseText: data,
          option,
          fileItem
        })
      }
      let task = new UploaderTaro(uploadOption)
      if (props.autoUpload) {
        task.uploadTaro(Taro.uploadFile, Taro.getEnv())
      } else {
        uploadQueue.value.push(
          new Promise((resolve) => {
            resolve(task)
          })
        )
      }
    }

    const clearUploadQueue = (index = -1) => {
      if (index > -1) {
        uploadQueue.value.splice(index, 1)
      } else {
        uploadQueue.value = []
        fileList.value = []
        emit('update:fileList', fileList.value)
      }
    }
    const submit = () => {
      Promise.all(uploadQueue.value).then((res) => {
        res.forEach(i => i.uploadTaro(Taro.uploadFile, Taro.getEnv()))
      })
    }
    interface TFileType {
      size: number
      type?: string
      fileType?: string
      originalFileObj?: any
      tempFilePath?: string
      thumbTempFilePath?: string
      path?: string
    }
    const readFile = <T extends TFileType>(files: T[]) => {
      files.forEach((file: T, index: number) => {
        let fileType = file.type
        let filepath = (file.tempFilePath || file.path) as string
        const fileItem = reactive(new FileItem())
        fileItem.message = translate('ready')
        if (file.fileType) {
          fileType = file.fileType
        } else {
          const imgReg = /\.(png|jpeg|jpg|webp|gif)$/i
          if (!fileType && (imgReg.test(filepath) || filepath.includes('data:image'))) {
            fileType = 'image'
          }
        }

        fileItem.path = filepath
        fileItem.name = filepath
        fileItem.status = 'ready'
        fileItem.message = translate('waitingUpload')
        fileItem.type = fileType

        if (Taro.getEnv() == 'WEB') {
          fileItem.sourceFile = file.originalFileObj
          fileItem.name = file.originalFileObj?.name
          fileItem.type = file.originalFileObj?.type
        }

        if (props.isPreview) {
          fileItem.url = fileType == 'video' ? file.thumbTempFilePath : filepath
        }
        fileList.value.push(fileItem)
        executeUpload(fileItem, index)
      })
    }

    const filterFiles = <T extends TFileType>(files: T[]) => {
      const maximum = (props.maximum as number) * 1
      const maximize = (props.maximize as number) * 1
      const oversizes = new Array<T>()
      files = files.filter((file: T) => {
        if (file.size > maximize) {
          oversizes.push(file)
          return false
        } else {
          return true
        }
      })
      if (oversizes.length) {
        emit('oversize', oversizes)
      }
      let currentFileLength = files.length + fileList.value.length
      if (currentFileLength > maximum) {
        files.splice(files.length - (currentFileLength - maximum))
      }
      return files
    }

    const deleted = (file: FileItem, index: number) => {
      fileList.value.splice(index, 1)
      emit('delete', {
        file,
        fileList: fileList.value,
        index
      })
    }

    const onDelete = (file: FileItem, index: number) => {
      if (disabled.value) return
      clearUploadQueue(index)
      funInterceptor(props.beforeDelete, {
        args: [file, fileList.value],
        done: () => deleted(file, index)
      })
    }

    return {
      onDelete,
      fileList,
      disabled,
      chooseImage,
      fileItemClick,
      clearUploadQueue,
      submit
    }
  }
})
</script>
