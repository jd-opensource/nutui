import { mount } from '@vue/test-utils'
import { Dialog } from '@nutui/nutui'
import { nextTick } from 'vue'

beforeEach(() => {
  // create teleport target
  const el = document.createElement('div')
  el.id = 'dialog-teleport'
  document.body.appendChild(el)
})

test('Dialog: basic props', async () => {
  const wrapper = mount(Dialog, {
    props: {
      visible: true,
      title: 't1',
      content: 'c1',
      cancelText: 'cancelText',
      okText: 'okText',
      okAutoClose: false
    }
  })
  nextTick(() => {
    const t = wrapper.find('.nut-dialog__header')
    expect(t.html()).includes('t1')
    const c = wrapper.find('.nut-dialog__content')
    expect(c.html()).includes('c1')
    const cancel = wrapper.find('.nut-dialog__footer-cancel')
    expect(cancel.html()).includes('cancelText')
    const ok = wrapper.find('.nut-dialog__footer-ok')
    expect(ok.html()).includes('okText')
    ok.trigger('click')
    nextTick(() => {
      expect(wrapper.vm.showPopup).toBeTruthy()
    })
  })
})

test('Dialog: header slot', async () => {
  const wrapper = mount(Dialog, {
    slots: {
      header: 'test title slot'
    }
  })
  nextTick(() => {
    const t = wrapper.find('.nut-dialog__header')
    expect(t.html()).includes('test title slot')
  })
})

// TODO: teleport test
// test('Dialog: teleport', async () => {
//   const wrapper = mount(Dialog, {
//     props: {
//       visible: true,
//       teleport: '#dialog-teleport'
//     },
//   });
//   const overlay = wrapper.getComponent(Overlay)
//   await overlay.get('.nut-overlay')
// });

test('Dialog: closeOnClickOverlay', async () => {
  const wrapper1 = mount(Dialog, {
    props: {
      visible: true,
      closeOnClickOverlay: true
    }
  })
  const wrapper2 = mount(Dialog, {
    props: {
      visible: true,
      closeOnClickOverlay: false
    }
  })
  const overlay1 = wrapper1.find('.nut-overlay')
  overlay1.trigger('click')
  nextTick(() => {
    const popup1 = wrapper1.find('.nut-popup')
    expect(popup1.html().includes('display: none;')).toBeTruthy()
  })

  const overlay2 = wrapper2.find('.nut-overlay')
  overlay2.trigger('click')
  nextTick(() => {
    const popup2 = wrapper2.find('.nut-popup')
    expect(popup2.html().includes('display: none;')).toBeFalsy()
  })
})
