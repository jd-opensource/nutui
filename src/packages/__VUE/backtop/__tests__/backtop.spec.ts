import { mount, config } from '@vue/test-utils'
import { mockScrollTop } from './../../../utils/unit'
import { nextTick } from 'vue'
import { Backtop } from '@nutui/nutui'
import { Top } from '@nutui/icons-vue'
beforeAll(() => {
  config.global.components = {
    Top
  }
})

afterAll(() => {
  config.global.components = {}
})

test('emit click event', () => {
  const wrapper = mount(Backtop)
  wrapper.trigger('click')
  expect(wrapper.emitted('click')!.length).toEqual(1)
})

test('backtop show', () => {
  const wrapper = mount(Backtop)
  const backtop = wrapper.find('.nut-backtop')
  expect(backtop.exists()).toBe(true)
})

test('backtop style', () => {
  const wrapper = mount(Backtop, {
    props: {
      bottom: 50
    }
  })
  const backtop: any = wrapper.find('.nut-backtop')
  expect(backtop.element.style.bottom).toBe('50px')
})

test('backtop style,backtop show', async () => {
  const wrapper = mount(Backtop, {
    props: {
      right: 40
    }
  })
  await mockScrollTop(1000)
  const show: any = wrapper.find('.show')
  expect(show.exists()).toBe(true)
  const backtop: any = wrapper.find('.nut-backtop')
  expect(backtop.element.style.right).toBe('40px')
})

test('backtop style', async () => {
  const wrapper = mount(Backtop, {
    props: {
      zIndex: 100,
      distance: 0
    }
  })
  await nextTick()
  const backtop: any = wrapper.find('.nut-backtop')
  const show: any = wrapper.find('.show')
  expect(backtop.element.style.zIndex).toBe('100')
  expect(show.exists()).toBe(true)
})
