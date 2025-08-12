import { mount } from '@vue/test-utils'
import { AvatarCropper } from '@nutui/nutui'
import { sleep, trigger, triggerDrag } from '@/packages/utils/unit'
import { h } from 'vue'

const mockFile = new File([new ArrayBuffer(10000)], 'test.jpg', {
  type: 'image/jpg'
})

test('layout default slot', () => {
  const wrapper = mount(AvatarCropper, {
    slots: {
      default: h('img', {
        src: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
      })
    }
  })

  expect(wrapper.html()).toMatchSnapshot()
  expect(wrapper.find('.nut-avatar-cropper').html()).toContain(
    '<img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png">'
  )
})

test('should render base cutAvatar and type', async () => {
  const wrapper = mount(AvatarCropper)
  const up_load = wrapper.find('.nut-avatar-cropper')
  expect(up_load.exists()).toBe(true)
  const up_load1 = wrapper.find('.nut-avatar-cropper__input')
  expect(up_load1.attributes().type).toBe('file')
})

test('AvatarCropper: Select the image to open the crop window', async () => {
  const wrapper = mount(AvatarCropper)
  const input: any = wrapper.find<HTMLInputElement>('.nut-avatar-cropper__input')
  expect(input.exists()).toBe(true)
  const smallFile = new File([new ArrayBuffer(100)], 'small.jpg')
  Object.defineProperty(input.element, 'files', {
    get: vi.fn().mockReturnValue([mockFile, smallFile])
  })
  expect(wrapper.find('.nut-cropper-popup').attributes()).toHaveProperty('style', 'display: none;')
  await input.trigger('change')
  await sleep()
  const canvas = wrapper.find('.nut-cropper-popup__canvas')
  expect(canvas.exists()).toBe(true)

  const track = wrapper.find('.nut-cropper-popup__highlight')

  trigger(track, 'touchstart', 0, 0, { x: 0, y: 0 })
  trigger(track, 'touchmove', 20, 20, { x: 40, y: 60 })
  trigger(track, 'touchend', 20, 100, { x: 40, y: 60 })

  triggerDrag(track, 50, 60)
  const toolbar = wrapper.findAll('.nut-cropper-popup__toolbar-item')
  expect(toolbar.length).toBe(4)

  const cancel = toolbar[0]
  cancel.trigger('click')
  expect(wrapper.emitted('cancel')).toBeTruthy()
  expect(input.element.value).toBe('')
  await sleep()
  expect(wrapper.find('.nut-cropper-popup').attributes()).toHaveProperty('style', 'display: none;')

  const reset = toolbar[1]
  reset.trigger('click')
  expect(wrapper.vm.angle).toBe(0)

  const rotate = toolbar[2]
  rotate.trigger('click')
  expect(wrapper.vm.angle).toBe(90)
  triggerDrag(track, 1000, 2000)
  rotate.trigger('click')
  expect(wrapper.vm.angle).toBe(180)
  rotate.trigger('click')
  rotate.trigger('click')
  expect(wrapper.vm.angle).toBe(0)

  const confirm = toolbar[3]
  confirm.trigger('click')
  expect(wrapper.emitted('confirm')).toBeTruthy()
})
