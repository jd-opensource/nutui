import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import { nextTick } from 'vue'
import { Toast } from '@nutui/nutui'

describe('component toast', () => {
  test('should render toast after using msg and id', async () => {
    const wrapper = mount(Toast, {
      props: {
        id: '12313',
        msg: 'taost'
      }
    })
    await nextTick()
    const toast = wrapper.find('.nut-toast')
    expect(toast.exists()).toBe(true)
  })

  // test('should be displayed long enough when use duration ', async () => {
  //   const wrapper = mount(Toast, {
  //     props: {
  //       msg: 'taost',
  //       duration: 3000
  //     }
  //   });
  //   await nextTick();
  //   const toast: any = wrapper.find('.nut-toast');
  //   expect(toast.exists()).toBe(true);
  //   await nextTick();
  //   expect(toast.element.style.display).toEqual('none');
  // });

  test('should change cover style after using cover-color prop', async () => {
    const wrapper = mount(Toast, {
      props: {
        cover: true,
        coverColor: 'black'
      }
    })
    await nextTick()
    const toastCover: any = wrapper.find('.nut-toast-cover')
    expect(toastCover.element.style.backgroundColor).toEqual('black')
  })

  test('should close Toast when using closeOnClickOverlay prop and clicked', async () => {
    const wrapper = mount(Toast, {
      props: {
        cover: true,
        coverColor: 'black',
        closeOnClickOverlay: true
      }
    })
    await nextTick()
    const toast: any = wrapper.find('.nut-toast')
    toast.trigger('click')
    await nextTick()
    expect(toast.element.style.display).toEqual('none')
  })
  test('should not close Toast when closeOnClickOverlay is false and clicked', async () => {
    const wrapper = mount(Toast, {
      props: {
        cover: true,
        closeOnClickOverlay: false,
        duration: 0
      }
    })
    await nextTick()
    const toast: any = wrapper.find('.nut-toast')
    await toast.trigger('click')
    await nextTick()
    expect(toast.element.style.display).not.toEqual('none')
  })

  test('should auto-hide after duration', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Toast, {
      props: { msg: 'msg', duration: 100 }
    })
    await nextTick()
    const toast: any = wrapper.find('.nut-toast')
    expect(toast.element.style.display).not.toEqual('none')

    vi.advanceTimersByTime(100)
    await nextTick()
    expect(toast.element.style.display).toEqual('none')
    vi.useRealTimers()
  })

  test('should not auto-hide when duration is 0', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Toast, {
      props: { msg: 'msg', duration: 0 }
    })
    await nextTick()
    const toast: any = wrapper.find('.nut-toast')
    vi.advanceTimersByTime(5000)
    await nextTick()
    expect(toast.element.style.display).not.toEqual('none')
    vi.useRealTimers()
  })
  test('should set state.closing to true after clicking overlay', async () => {
    const wrapper = mount(Toast, {
      props: { cover: true, closeOnClickOverlay: true, duration: 0 }
    })
    await nextTick()
    const toast = wrapper.find('.nut-toast')
    await toast.trigger('click')
    await nextTick()
    expect((wrapper.vm as any).state.closing).toBe(true)
    expect(toast.element.style.display).toEqual('none')
  })

  test('should not re-trigger hide when clicking overlay during closing animation', async () => {
    const wrapper = mount(Toast, {
      props: { cover: true, closeOnClickOverlay: true, duration: 0 }
    })
    await nextTick()
    const toast = wrapper.find('.nut-toast')

    // 第一次点击：state.mounted = false，state.closing = true
    await toast.trigger('click')
    await nextTick()
    expect((wrapper.vm as any).state.closing).toBe(true)
    expect(toast.element.style.display).toEqual('none')

    // 第二次点击：closing = true，clickCover 提前 return，state 保持不变
    await toast.trigger('click')
    await nextTick()
    expect((wrapper.vm as any).state.closing).toBe(true)
    expect((wrapper.vm as any).state.mounted).toBe(false)
  })

  test('should reset closing state when show() is called again', async () => {
    const wrapper = mount(Toast, {
      props: { cover: true, closeOnClickOverlay: true, duration: 0 }
    })
    await nextTick()
    const toast = wrapper.find('.nut-toast')

    await toast.trigger('click')
    await nextTick()
    expect((wrapper.vm as any).state.closing).toBe(true)

    // 更新 duration 触发 watch → show() → closing 重置
    await wrapper.setProps({ duration: 100 })
    await nextTick()
    expect((wrapper.vm as any).state.closing).toBe(false)
  })
})
