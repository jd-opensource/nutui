import { mount } from '@vue/test-utils';
import Button from '../';
import { nextTick } from 'vue';
import { StarFill } from '@nutui/icons-vue';
test('emit click event', () => {
  const wrapper = mount(Button);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')!.length).toEqual(1);
});

test('slot test', async () => {
  const wrapper = mount(Button, {
    slots: {
      default: '按钮测试'
    }
  });
  expect(wrapper.html()).toContain('按钮测试');
});
test('should emit click event', () => {
  const wrapper = mount(Button);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});

test('should not allow click when set disabled props', async () => {
  const wrapper = mount(Button, {
    props: {
      disabled: true
    }
  });
  wrapper.trigger('click');
  await nextTick();
  expect(wrapper.emitted('click')).toBeFalsy();
});
test('should not emit click event when loading', () => {
  const wrapper = mount(Button, {
    props: {
      loading: true
    }
  });

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeFalsy();
});
test('should find nut-icon class of an svg tag when using icon slot', () => {
  const wrapper = mount(Button, {
    slots: {
      icon: StarFill
    }
  });

  const icons = wrapper.findAll('svg');
  expect(icons.length).toEqual(1);
  expect(icons[0].element.classList).toContain('nut-icon');
});
test('props color & plain', async () => {
  const wrapper = mount(Button, {
    props: {
      color: 'blue'
    }
  });

  const btn = wrapper.findComponent(Button);
  expect(btn.attributes('style')).toContain('color: blue');

  wrapper.setProps({
    plain: true
  });
  await nextTick();
  console.log(btn.attributes('style'));
  expect(btn.attributes('style')).toContain('background: rgb(255, 255, 255)');
  expect(btn.attributes('style')).toContain('border-color: blue');
});
