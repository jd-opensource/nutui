<template>
  <view :class="classes" @click="onClick">
    <view class="nut-input-value">
      <view class="nut-input-inner">
        <view v-if="$slots.left" class="nut-input-left-box">
          <slot name="left"></slot>
        </view>
        <view class="nut-input-box">
          <component
            :is="renderInput(type)"
            ref="inputRef"
            class="input-text"
            :style="styles"
            :maxlength="maxLength"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :value="modelValue"
            :format-trigger="formatTrigger"
            :autofocus="autofocus"
            :enterkeyhint="confirmType"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
            @click="onClickInput"
            @change="endComposing"
            @compositionend="endComposing"
            @compositionstart="startComposing"
            @keyup="onKeyup"
          ></component>
          <view v-if="showWordLimit && maxLength" class="nut-input-word-limit">
            <span class="nut-input-word-num">{{ getModelValue() ? getModelValue().length : 0 }}</span
            >/{{ maxLength }}
          </view>
        </view>
        <view
          v-if="clearable && !readonly"
          v-show="(active || showClearIcon) && getModelValue().length > 0"
          class="nut-input-clear-box"
          @click="clear"
        >
          <slot name="clear">
            <MaskClose class="nut-input-clear" v-bind="$attrs" :size="clearSize" :width="clearSize" :height="clearSize">
            </MaskClose>
          </slot>
        </view>
        <view v-if="type === 'password' && !readonly" class="nut-input-eye">
          <Marshalling v-if="isPassword" v-bind="$attrs" size="15" @click="updateStatus"> </Marshalling>
          <Eye v-else v-bind="$attrs" size="15" @click="updateStatus"> </Eye>
        </view>
        <view class="nut-input-right-box">
          <slot name="right"> </slot>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, ComputedRef, h, toRef } from 'vue'
import { MaskClose, Marshalling, Eye } from '@nutui/icons-vue'
import { formatNumber, mapInputType } from './util'
import { useFormDisabled } from '../form/common'

import type { InputType, InputAlign, InputFormatTrigger, InputTarget, InputConfirmType } from './types'

defineOptions({
  name: 'NutInput'
})

export type InputProps = Partial<{
  type: InputType
  modelValue: string | number
  placeholder: string
  inputAlign: InputAlign
  required: boolean
  disabled: boolean
  readonly: boolean
  maxLength: string | number
  clearable: boolean
  clearSize: string | number
  border: boolean
  formatTrigger: InputFormatTrigger
  formatter: (value: string) => string
  showWordLimit: boolean
  autofocus: boolean
  confirmType: InputConfirmType
  error: boolean
  showClearIcon: boolean
}>

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  modelValue: '',
  placeholder: '',
  inputAlign: 'left',
  required: false,
  disabled: false,
  readonly: false,
  maxLength: '',
  clearable: false,
  clearSize: '14',
  border: true,
  formatTrigger: 'onChange',
  showWordLimit: false,
  autofocus: false,
  confirmType: 'done',
  error: false,
  showClearIcon: false
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus', 'clear', 'keypress', 'click', 'clickInput', 'confirm'])

const disabled = useFormDisabled(toRef(props, 'disabled'))
const active = ref(false)
const inputRef = ref()
const isPassword = ref(true)
const getModelValue = () => String(props.modelValue ?? '')

const renderInput = (type: InputType) => {
  if (type === 'password') {
    return h('input', { ...mapInputType(isPassword.value ? 'password' : 'text') })
  }
  return h('input', { ...mapInputType(type) })
}

const state = reactive({
  focused: false,
  validateFailed: false, // 校验失败
  validateMessage: '' // 校验信息
})

const classes = computed(() => {
  const prefixCls = 'nut-input'
  return {
    [prefixCls]: true,
    [`${prefixCls}--disabled`]: disabled.value,
    [`${prefixCls}--required`]: props.required,
    [`${prefixCls}--error`]: props.error,
    [`${prefixCls}--border`]: props.border
  }
})

const styles: ComputedRef = computed(() => {
  return {
    textAlign: props.inputAlign
  }
})

const onInput = (event: Event) => {
  if (!(event.target as InputTarget)!.composing) {
    const input = event.target as HTMLInputElement
    let value = input.value
    if (props.maxLength && value.length > Number(props.maxLength)) {
      value = value.slice(0, Number(props.maxLength))
    }
    updateValue(value)
  }
}

const updateValue = (value: string, trigger: InputFormatTrigger = 'onChange') => {
  if (['number', 'digit'].includes(props.type)) {
    const isNumber = props.type === 'number'
    value = formatNumber(value, isNumber, isNumber)
  }

  if (props.formatter && trigger === props.formatTrigger) {
    value = props.formatter(value)
  }

  if (inputRef?.value?.value !== value) {
    inputRef.value.value = value
  }

  if (value !== props.modelValue) {
    emit('update:modelValue', value)
    // emit('change', value);
  }
}

const onFocus = (event: Event) => {
  if (disabled.value || props.readonly) {
    return
  }
  active.value = true
  emit('focus', event)
  // emit('update:modelValue', value);
}

const onBlur = (event: Event) => {
  if (disabled.value || props.readonly) {
    return
  }
  setTimeout(() => {
    active.value = false
  }, 200)

  const input = event.target as HTMLInputElement
  let value = input.value
  if (props.maxLength && value.length > Number(props.maxLength)) {
    value = value.slice(0, Number(props.maxLength))
  }
  updateValue(getModelValue(), 'onBlur')
  emit('blur', event)
  // emit('update:modelValue', value);
}

const clear = (event: Event) => {
  event.stopPropagation()
  if (disabled.value) return
  emit('update:modelValue', '', event)
  // emit('change', '', event);
  emit('clear', '', event)
}

const resetValidation = () => {
  if (state.validateFailed) {
    state.validateFailed = false
    state.validateMessage = ''
  }
}

const updateStatus = () => {
  console.log('updateStatus', isPassword.value)

  isPassword.value = !isPassword.value
}

const onClickInput = (event: MouseEvent) => {
  if (disabled.value) {
    return
  }
  emit('clickInput', event)
}

const onClick = (event: MouseEvent) => {
  emit('click', event)
}

const startComposing = ({ target }: Event) => {
  ;(target as InputTarget)!.composing = true
}

const endComposing = ({ target }: Event) => {
  if ((target as InputTarget)!.composing) {
    ;(target as InputTarget)!.composing = false
    ;(target as InputTarget)!.dispatchEvent(new Event('input'))
  }
}
watch(
  () => props.modelValue,
  () => {
    updateValue(getModelValue())
    resetValidation()
  }
)

onMounted(() => {
  updateValue(getModelValue(), props.formatTrigger)
})

const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

const select = () => {
  inputRef.value?.select()
}

const onKeyup = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    emit('confirm', e)
  }
}

defineExpose({
  focus,
  blur,
  select
})
</script>
./types
