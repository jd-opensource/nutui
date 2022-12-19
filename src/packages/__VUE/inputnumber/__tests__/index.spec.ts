import { mount, config } from '@vue/test-utils';
import InputNumber from '../index.vue';
import { h, nextTick } from 'vue';
import { Minus, Plus, Left, Right } from '@nutui/icons-vue';

beforeAll(() => {
  config.global.components = { Minus, Plus };
});

afterAll(() => {
  config.global.components = {};
});

test('should render modelValue', () => {
  const wrapper = mount(InputNumber, {
    props: {
      modelValue: 12
    }
  });

  const input = wrapper.find('input').element as HTMLInputElement;
  expect(input.value).toBe('12');
});

test('should add step 2 when trigger click right button', async () => {
  const wrapper = mount(InputNumber, {
    props: {
      modelValue: 1,
      step: '2'
    }
  });

  const iconPlus = wrapper.find('.nut-input-number__right');
  await iconPlus.trigger('click');

  expect(wrapper.emitted('overlimit')).toBeFalsy();
  expect(wrapper.emitted('add')).toBeTruthy();
  expect((wrapper.emitted('change')![0] as any[])[0]).toEqual('3');
  expect((wrapper.emitted('update:modelValue')![0] as any[])[0]).toEqual('3');
});

test('should minis step 2 when trigger click left button', async () => {
  const wrapper = mount(InputNumber, {
    props: {
      modelValue: 3,
      step: '2'
    }
  });

  const iconMinus = wrapper.find('.nut-input-number__left');
  await iconMinus.trigger('click');

  expect(wrapper.emitted('overlimit')).toBeFalsy();
  expect(wrapper.emitted('reduce')).toBeTruthy();
  expect((wrapper.emitted('change')![0] as any[])[0]).toEqual('1');
  expect((wrapper.emitted('update:modelValue')![0] as any[])[0]).toEqual('1');
});

test('should render max and min props', async () => {
  const wrapper = mount(InputNumber, {
    props: {
      modelValue: 100,
      min: '2',
      max: 100
    }
  });

  const iconPlus = wrapper.find('.nut-input-number__right');
  await iconPlus.trigger('click');

  expect(wrapper.emitted('overlimit')).toBeTruthy();
  expect(wrapper.emitted('add')).toBeTruthy();
  expect(wrapper.emitted('change')).toBeFalsy();

  await wrapper.setProps({
    modelValue: 2
  });

  const iconMinus = wrapper.find('.nut-input-number__left');
  await iconMinus.trigger('click');
  expect(wrapper.emitted('overlimit')).toBeTruthy();
  expect(wrapper.emitted('reduce')).toBeTruthy();
  expect(wrapper.emitted('change')).toBeFalsy();
});

test('should not trigger click when disabled props to be true', async () => {
  const wrapper = mount(InputNumber, {
    disabled: true,
    modelValue: 1
  });

  const iconPlus = wrapper.find('.nut-input-number__right');
  await iconPlus.trigger('click');
  expect((wrapper.emitted('update:modelValue')![0] as any[])[0]).toEqual('1');

  const iconMinus = wrapper.find('.nut-input-number__left');
  await iconMinus.trigger('click');
  expect((wrapper.emitted('update:modelValue')![0] as any[])[0]).toEqual('1');
});

test('should not focus input when readonly props to be true', async () => {
  const wrapper = mount(InputNumber, {
    props: {
      readonly: true,
      modelValue: 2
    }
  });

  const iconMinus = wrapper.find('.nut-input-number__left');
  await iconMinus.trigger('click');
  await nextTick();

  expect((wrapper.emitted('update:modelValue')![0] as any[])[0]).toEqual('1');

  expect(wrapper.emitted('focus')).toBeFalsy();
});

test('should render decimal when step props to be 0.2', async () => {
  const wrapper = mount(InputNumber, {
    props: {
      step: 0.2,
      decimalPlaces: 1,
      modelValue: 2
    }
  });

  const iconPlus = wrapper.find('.nut-input-number__right');
  await iconPlus.trigger('click');

  expect((wrapper.emitted('change')![0] as any[])[0]).toEqual('2.2');
});

test('should render size when buttonSize and inputWidth props setted', async () => {
  const wrapper = mount(InputNumber, {
    props: {
      buttonSize: '30px',
      inputWidth: '120px',
      modelValue: 2
    }
  });

  const iconPlus = wrapper.find('.nut-input-number__right .nut-icon');
  const input = wrapper.find('input').element as HTMLInputElement;

  expect((iconPlus.element as HTMLElement).style.width).toEqual('30px');
  expect(input.style.width).toEqual('120px');
});

test('should update input value when inputValue overlimit', async () => {
  const wrapper = mount(InputNumber, {
    props: {
      modelValue: 2,
      max: 100
    }
  });

  const input = wrapper.find('input');
  input.element.value = '200';
  await input.trigger('change');
  await input.trigger('blur');

  expect((wrapper.emitted('update:modelValue')![0] as any[])[0]).toEqual('100');
});

test('should render icon when leftIcon and rightIcon slots setted', async () => {
  const wrapper = mount(InputNumber, {
    slots: {
      leftIcon: h(Left, {
        color: '#123456'
      }),
      rightIcon: h(Right, {
        color: '#654321'
      })
    }
  });

  const iconList = wrapper.findAll('.nut-input-number__icon');
  expect(iconList.length).toBe(2);
  expect(iconList[0].html()).toContain('color="#123456"');
  expect(iconList[1].html()).toContain('color="#654321"');
});
