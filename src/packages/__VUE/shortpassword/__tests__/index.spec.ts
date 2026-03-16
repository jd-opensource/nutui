import { mount } from '@vue/test-utils'
import { ShortPassword } from '@nutui/nutui'
import { nextTick } from 'vue'

test('should render shortpassword', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: false,
      modelValue: '123'
    }
  })
  const psdLength = wrapper.findAll('.nut-short-password__item')
  expect(psdLength.length).toBe(6)
})

test('should emit complete when finish input', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true,
      modelValue: ''
    }
  })
  wrapper.setProps({ modelValue: '321123' })
  await nextTick()
  expect(wrapper.emitted().complete[0]).toEqual(['321123'])
})

test('should emit tips when clicking tips text', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true,
      tips: '忘记密码'
    }
  })
  const tipsEl = wrapper.find('.nut-short-password--forget')
  await tipsEl.trigger('click')
  expect(wrapper.emitted().tips).toBeTruthy()
})
