import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { Range } from '@nutui/nutui'
import { trigger, triggerDrag } from '../../../utils/unit'

test('should render range when used ', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 30
    }
  })
  const inner = wrapper.find<HTMLElement>('.nut-range-button .number')
  expect(inner.text()).toBe('30')
})

test('should render two buttons when use range props', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: [30, 70],
      range: true
    }
  })
  const left = wrapper.find<HTMLElement>('.nut-range-button-wrapper-left .number')
  const right = wrapper.find<HTMLElement>('.nut-range-button-wrapper-right .number')
  expect(left.text()).toBe('30')
  expect(right.text()).toBe('70')
})

test('should set min and max when use min and max props', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 0,
      max: 10,
      min: -10,
      range: true
    }
  })

  const min = wrapper.find<HTMLElement>('.nut-range-min')
  const max = wrapper.find<HTMLElement>('.nut-range-max')
  const btn = wrapper.find<HTMLElement>('.nut-range-button .number')
  expect(min.text()).toBe('-10')
  expect(max.text()).toBe('10')
  expect(btn.text()).toBe('0')
})

test('should change color template when use color props', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10,
      inactiveColor: 'rgb(163,184,255)',
      buttonColor: 'rgb(52,96,250)',
      activeColor: 'rgb(238, 238, 238)'
    }
  })
  await nextTick()
  const root = wrapper.find<HTMLElement>('.nut-range')
  const bar = wrapper.find<HTMLElement>('.nut-range-bar')
  expect(root.element.style.backgroundColor).toEqual('rgb(163, 184, 255)')
  expect(bar.element.style.background).toEqual('rgb(238, 238, 238)')
})

test('should render slots template when use slots', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10
    },
    slots: {
      button: '<div class="test_div">btn</div>'
    }
  })
  const btn = wrapper.find<HTMLElement>('.nut-range-button-wrapper')
  expect(btn.html()).toContain('<div class="test_div">btn</div>')
})

test('should not render elements  when use hidden elements props', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10,
      hiddenRange: true,
      hiddenTag: true
    }
  })
  expect(wrapper.find<HTMLElement>('.nut-range-button').exists()).toBe(true)
  expect(wrapper.find<HTMLElement>('.min').exists()).toBe(false)
  expect(wrapper.find<HTMLElement>('.max').exists()).toBe(false)
  expect(wrapper.find<HTMLElement>('.nut-range-button .number').exists()).toBe(false)
})

test('should not allow to click slider when disabled', async () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10,
      disabled: true
    }
  })
  const range = wrapper.find('.nut-range')
  trigger(range, 'click', 100, 0)
  expect(wrapper.emitted('change')).toBeFalsy()
})

test('should emit "change" event after dragging button', () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10
    }
  })

  const button = wrapper.find('.nut-range-button')
  triggerDrag(button, 50, 0)
  expect(wrapper.emitted('change')!.pop()).toEqual([100])
})
test('should emit "update:modelValue" event after dragging button', () => {
  const wrapper = mount(Range, {
    props: {
      modelValue: 10
    }
  })

  const button = wrapper.find('.nut-range-button')
  triggerDrag(button, 50, 0)
  expect(wrapper.emitted('update:modelValue')!.pop()).toEqual([100])
})

test('keeps a coarse-step release inside bounds changed during dragging', async () => {
  const wrapper = mount(Range, {
    props: { modelValue: 0, min: 0, max: 100, step: 40 }
  })
  const api = wrapper.vm as any
  api.root.getBoundingClientRect = () => ({ width: 100, height: 100 })
  api.onTouchStart({ touches: [{ clientX: 0, clientY: 0 }] })
  api.onTouchMove({ touches: [{ clientX: 80, clientY: 0 }] })
  await wrapper.setProps({ max: 60 })
  api.onTouchEnd()
  expect(wrapper.emitted('change')?.pop()).toEqual([60])
  wrapper.unmount()
})
