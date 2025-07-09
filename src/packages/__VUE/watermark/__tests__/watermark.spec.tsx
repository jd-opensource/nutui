import { mount } from '@vue/test-utils'
import { Watermark } from '@nutui/nutui'
import { nextTick } from 'vue'
import 'vitest-canvas-mock'

test('WaterMark: fullPage = true', async () => {
  const wrapper = mount(() => {
    return <Watermark fontColor="#fa2c19" content="nut-ui"></Watermark>
  })
  await nextTick()

  expect(wrapper.findAll('.nut-watermark').length).toBe(1)
  expect(wrapper.findAll('.nut-watermark-full-page').length).toBe(1)
})

test('WaterMark: fullPage = false, content string[]', () => {
  const wrapper = mount(() => {
    return <Watermark fullPage={false} fontColor="#fa2c19" content={['nut1', 'nut2']}></Watermark>
  })
  expect(wrapper.findAll('.nut-watermark-full-page').length).toBe(0)
})

test('WaterMark: image', () => {
  const url = 'img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  const wrapper = mount(() => {
    return <Watermark image={url}></Watermark>
  })
  expect(wrapper.findAll('.nut-watermark-full-page').length).toBe(1)
})
