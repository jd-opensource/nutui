<template>
  <view class="nut-uploader">
    <view v-if="$slots.default" class="nut-uploader__slot">
      <slot></slot>
      <component :is="renderInput" v-if="Number(maximum) - fileList.length" @change="onChange"></component>
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
          v-if="item?.type?.includes('image') && item.url"
          class="nut-uploader__preview-img__c"
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
      <component :is="renderInput" @change="onChange"></component>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, h, PropType, ref, watch, toRef } from 'vue'
import { createComponent } from '@/packages/utils/create'
import { Uploader, UploadOptions } from './uploader'
import { FileItem } from './type'
import { funInterceptor, Interceptor } from '@/packages/utils/util'
import NutProgress from '../progress'
import { Photograph, Failure, Loading, Del, Link } from '@nutui/icons-vue'
import { useLocale } from '@/packages/utils/useLocale'
import { useFormDisabled } from '../form/common'

const { create } = createComponent('uploader')
const cN = 'NutUploader'

export default create({
  components: {
    NutProgress,
    Photograph,
    Failure,
    Loading,
    Del,
    Link
  },
  props: {
    name: { type: String, default: 'file' },
    url: { type: String, default: '' },
    // defaultFileList: { type: Array, default: () => new Array<FileItem>() },
    timeout: { type: [Number, String], default: 1000 * 30 },
    fileList: { type: Array as PropType<any[]>, default: () => [] },
    isPreview: { type: Boolean, default: true },
    // picture、list
    listType: { type: String, default: 'picture' },
    isDeletable: { type: Boolean, default: true },
    method: { type: String, default: 'post' },
    capture: { type: Boolean, default: false },
    maximize: { type: [Number, String], default: Number.MAX_VALUE },
    maximum: { type: [Number, String], default: 1 },
    clearInput: { type: Boolean, default: true },
    accept: { type: String, default: '*' },
    headers: { type: Object, default: {} },
    data: { type: Object, default: {} },
    xhrState: { type: [Number, String], default: 200 },
    withCredentials: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    autoUpload: { type: Boolean, default: true },
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
    onChange: { type: Function }
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
    const uploadQueue = ref<Promise<Uploader>[]>([])

    watch(
      () => props.fileList,
      () => {
        fileList.value = props.fileList
      }
    )

    const renderInput = () => {
      let params: any = {
        class: `nut-uploader__input`,
        type: 'file',
        accept: props.accept,
        multiple: props.multiple,
        name: props.name,
        disabled: disabled.value
      }

      if (props.capture) {
        params.capture = 'camera'
        if (!params.accept) {
          params.accept = 'image/*'
        }
      }

      return h('input', params)
    }

    const clearInput = (el: HTMLInputElement) => {
      el.value = ''
    }

    const fileItemClick = (fileItem: FileItem) => {
      emit('fileItemClick', { fileItem })
    }

    const executeUpload = (fileItem: FileItem, index: number) => {
      const formData = new FormData()
      for (const [key, value] of Object.entries(props.data)) {
        formData.append(key, value)
      }
      formData.append(props.name, fileItem.sourceFile!)

      const uploadOption = new UploadOptions()
      uploadOption.url = props.url
      uploadOption.formData = formData
      uploadOption.timeout = (props.timeout as number) * 1
      uploadOption.method = props.method
      uploadOption.xhrState = props.xhrState as number
      uploadOption.headers = props.headers
      uploadOption.withCredentials = props.withCredentials
      uploadOption.beforeXhrUpload = props.beforeXhrUpload
      uploadOption.sourceFile = fileItem.sourceFile
      uploadOption.onStart = (option: UploadOptions) => {
        fileItem.status = 'ready'
        fileItem.message = translate('readyUpload')
        clearUploadQueue(index)
        emit('start', option)
      }
      uploadOption.onProgress = (event: ProgressEvent<XMLHttpRequestEventTarget>, option: UploadOptions) => {
        fileItem.status = 'uploading'
        fileItem.message = translate('uploading')
        fileItem.percentage = ((event.loaded / event.total) * 100).toFixed(0)
        emit('progress', { event, option, percentage: fileItem.percentage })
      }

      uploadOption.onSuccess = (responseText: XMLHttpRequest['responseText'], option: UploadOptions) => {
        fileItem.status = 'success'
        fileItem.message = translate('success')
        emit('success', {
          responseText,
          option,
          fileItem
        })
        emit('update:fileList', fileList.value)
      }
      uploadOption.onFailure = (responseText: XMLHttpRequest['responseText'], option: UploadOptions) => {
        fileItem.status = 'error'
        fileItem.message = translate('error')
        emit('failure', {
          responseText,
          option,
          fileItem
        })
      }
      let task = new Uploader(uploadOption)
      if (props.autoUpload) {
        task.upload()
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
        res.forEach(i => i.upload())
      })
    }

    const readFile = (files: File[]) => {
      files.forEach((file: File, index: number) => {
        const fileItem = reactive(new FileItem())
        fileItem.name = file.name
        fileItem.status = 'ready'
        fileItem.type = file.type
        fileItem.sourceFile = file
        fileItem.message = translate('waitingUpload')
        executeUpload(fileItem, index)

        if (props.isPreview && file.type.includes('image')) {
          const reader = new FileReader()
          reader.onload = (event: ProgressEvent<FileReader>) => {
            fileItem.url = (event.target as FileReader).result as string
            fileList.value.push(fileItem)
          }
          reader.readAsDataURL(file)
        } else {
          fileList.value.push(fileItem)
        }
      })
    }

    const filterFiles = (files: File[]) => {
      const maximum = (props.maximum as number) * 1
      const maximize = (props.maximize as number) * 1
      const oversizes = new Array<File>()
      files = files.filter((file: File) => {
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

    const onChange = (event: InputEvent) => {
      if (props.disabled || disabled.value) {
        return
      }
      const $el = event.target as HTMLInputElement
      let { files } = $el

      if (props.beforeUpload) {
        props.beforeUpload(files).then((f: Array<File>) => changeReadFile(f))
      } else {
        changeReadFile(files)
      }

      emit('change', {
        fileList: fileList.value,
        event
      })

      if (props.clearInput) {
        clearInput($el)
      }
    }

    const changeReadFile = (f: any) => {
      const _files: File[] = filterFiles(new Array<File>().slice.call(f))
      readFile(_files)
    }

    return {
      onChange,
      onDelete,
      fileList,
      fileItemClick,
      clearUploadQueue,
      submit,
      renderInput
    }
  }
})
</script>
