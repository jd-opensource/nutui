<template>
  <form class="nut-form" action="#" @submit.prevent="() => false">
    <nut-cell-group>
      <slot></slot>
    </nut-cell-group>
  </form>
</template>
<script setup lang="ts">
import { reactive, computed, provide, watch } from 'vue'
import { useChildren, getPropByPath, isPromise } from '@/packages/utils'
import NutCellGroup from '../cellgroup'
import type { FormErrorMessage, FormLabelPosition, FormRule, FormRules, FormStarPosition, FormItemRule } from './types'
import { FORM_KEY, FORM_DISABLED_KEY, FORM_TIP_KEY } from './common'

defineOptions({
  name: 'NutForm'
})

export type FormProps = Partial<{
  modelValue: any
  rules: FormRules
  disabled: boolean
  labelPosition: FormLabelPosition
  starPosition: FormStarPosition
}>

const props = withDefaults(defineProps<FormProps>(), {
  modelValue: () => ({}),
  rules: () => ({}),
  disabled: false,
  labelPosition: 'left',
  starPosition: 'left'
})

const emit = defineEmits(['validate'])

const { children, linkChildren } = useChildren(FORM_KEY)
linkChildren({ props })

const { linkChildren: linkChildren2 } = useChildren(FORM_DISABLED_KEY)
linkChildren2({ props })

const formErrorTip = computed(() => reactive<any>({}))

provide(FORM_TIP_KEY, formErrorTip)
const clearErrorTips = () => {
  Object.keys(formErrorTip.value).forEach((item) => {
    formErrorTip.value[item] = ''
  })
}

const reset = () => {
  clearErrorTips()
}

watch(
  () => props.modelValue,
  () => {
    clearErrorTips()
  },
  { immediate: true }
)

const getTaskFromChildren = () => {
  const task: FormRule[] = []
  children.forEach((item) => {
    task.push({
      prop: item?.['prop'],
      rules: item?.['rules'] || []
    })
  })
  return task
}

const tipMessage = (errorMsg: FormErrorMessage) => {
  if (errorMsg.message) {
    emit('validate', errorMsg)
  }
  formErrorTip.value[errorMsg.prop] = errorMsg.message
}

const checkRule = async (item: FormRule): Promise<FormErrorMessage | boolean> => {
  const { rules = [], prop } = item

  const _Promise = (errorMsg: FormErrorMessage): Promise<FormErrorMessage> => {
    return new Promise((resolve, reject) => {
      try {
        tipMessage(errorMsg)
        resolve(errorMsg)
      } catch (error) {
        reject(error)
      }
    })
  }

  if (!prop) {
    console.warn('[NutUI] <FormItem> 使用 rules 校验规则时 , 必须设置 prop 参数')
  }

  const value = getPropByPath(props.modelValue, prop || '')

  // clear tips
  tipMessage({ prop, message: '' })
  const formRules: FormRules = props.rules || {}
  const _rules = [...(formRules?.[prop] || []), ...rules]
  while (_rules.length) {
    const rule = _rules.shift() as FormItemRule
    const { validator, ...ruleWithoutValidator } = rule
    const { required, regex, message } = ruleWithoutValidator
    const errorMsg = { prop, message: message || '' }
    if (required) {
      if (!value && value !== 0) {
        return _Promise(errorMsg)
      }
    }
    if (regex && !regex.test(String(value))) {
      return _Promise(errorMsg)
    }
    if (validator) {
      const result = validator(value, ruleWithoutValidator)
      if (isPromise(result)) {
        try {
          const value = await result
          if (value === false) {
            return _Promise(errorMsg)
          }
        } catch (error) {
          const validateErrorMsg = { prop, message: error as string }
          return _Promise(validateErrorMsg)
        }
      } else {
        if (!result) {
          return _Promise(errorMsg)
        }
      }
    }
  }
  return Promise.resolve(true)
}

/**
 * 校验
 * @param customProp 指定校验，用于用户自定义场景时触发，例如 blur、change 事件
 * @returns
 */
const validate = (customProp = ''): Promise<{ valid: boolean, errors: any[] }> => {
  return new Promise((resolve, reject) => {
    try {
      const task = getTaskFromChildren()

      const errors = task.map((item) => {
        if (customProp && customProp !== item.prop) {
          return Promise.resolve(true)
        }
        return checkRule(item)
      })

      Promise.all(errors).then((errorRes) => {
        errorRes = errorRes.filter(item => item !== true)
        const res = { valid: true, errors: [] }
        if (errorRes.length) {
          res.valid = false
          res.errors = errorRes as any
        }
        resolve(res)
      })
    } catch (error) {
      reject(error)
    }
  })
}
const submit = () => {
  validate()
  return false
}

defineExpose({
  submit,
  reset,
  validate
})
</script>
