import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Toast, { showToast } from '../index'
import * as CreateUtils from '@/packages/utils/create'

describe('component toast', () => {
  // 每个测试后清理所有 toast
  afterEach(() => {
    showToast.hide()
  })

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
  test('should render customClass when using customClass prop ', async () => {
    const wrapper = mount(Toast, {
      props: {
        customClass: 'custom'
      }
    })
    await nextTick()
    const toast: any = wrapper.find('.custom')
    expect(toast.exists()).toBe(true)
  })

  test('should call unmount when clearing single toast', async () => {
    // Mock CreateComponent 来追踪 unmount 调用
    const unmountSpy = vi.fn()
    const originalCreateComponent = CreateUtils.CreateComponent
    let actualElementId = ''

    const mockUnmount = vi.fn(() => {
      unmountSpy()
      // 移除实际的 DOM 元素
      const element = document.getElementById(actualElementId)
      if (element) {
        element.parentNode?.removeChild(element)
      }
    })

    vi.spyOn(CreateUtils, 'CreateComponent').mockImplementation((opts: any, component: any) => {
      const result = originalCreateComponent(opts, component)
      // 捕获实际创建的元素 id
      actualElementId = result.instance.$el?.parentElement?.id || ''
      return {
        ...result,
        unmount: mockUnmount
      }
    })

    // 创建 toast
    showToast.success('Test message', { id: 'test-unmount-single', duration: 0 })
    await nextTick()

    // 验证 DOM 元素存在
    const toastElement = document.getElementById(actualElementId)
    expect(toastElement).toBeTruthy()

    // 清除 toast
    showToast.hide('test-unmount-single')
    await nextTick()

    // 验证 unmount 被调用
    expect(mockUnmount).toHaveBeenCalled()

    // 恢复原始实现
    vi.restoreAllMocks()
  })

  test('should call unmount for all toasts when clearing all', async () => {
    const unmountSpies: any[] = []
    const originalCreateComponent = CreateUtils.CreateComponent

    // Mock CreateComponent
    vi.spyOn(CreateUtils, 'CreateComponent').mockImplementation((opts: any, component: any) => {
      const result = originalCreateComponent(opts, component)
      const elementId = result.instance.$el?.parentElement?.id || ''
      const spy = vi.fn(() => {
        // 移除对应的 DOM 元素
        const element = document.getElementById(elementId)
        if (element) {
          element.parentNode?.removeChild(element)
        }
      })
      unmountSpies.push(spy)
      return {
        ...result,
        unmount: spy
      }
    })

    // 创建多个 toast
    showToast.success('Toast 1', { id: 'test-1', duration: 0 })
    showToast.success('Toast 2', { id: 'test-2', duration: 0 })
    showToast.success('Toast 3', { id: 'test-3', duration: 0 })
    await nextTick()

    // 验证创建了 3 个 toast
    expect(unmountSpies.length).toBe(3)

    // 清除所有 toast
    showToast.hide()
    await nextTick()

    // 验证所有 unmount 都被调用
    unmountSpies.forEach((spy) => {
      expect(spy).toHaveBeenCalled()
    })

    // 恢复原始实现
    vi.restoreAllMocks()
  })

  test('should properly clean up DOM when toast is cleared', async () => {
    // 创建 toast
    showToast.success('Test cleanup', { id: 'test-cleanup', duration: 0 })
    await nextTick()

    // 验证 DOM 存在 - 查找包含 test-cleanup 的元素
    let toastElements = document.querySelectorAll('[id*="test-cleanup"]')
    expect(toastElements.length).toBeGreaterThan(0)

    // 清除 toast
    showToast.hide('test-cleanup')
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 100))

    // 验证 DOM 已被清除
    toastElements = document.querySelectorAll('[id*="test-cleanup"]')
    expect(toastElements.length).toBe(0)
  })
})
