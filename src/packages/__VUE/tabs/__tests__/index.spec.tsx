import { config, mount } from '@vue/test-utils';
import Tabs from '../index.vue';
import TabPane from './../../tabpane/index.vue';
import { nextTick, reactive } from 'vue';
import { JoySmile, Dongdong } from '@nutui/icons-vue';
import NutSticky from '../../sticky/index.vue';

beforeAll(() => {
  config.global.components = {
    JoySmile,
    NutSticky,
    Dongdong
  };
});

afterAll(() => {
  config.global.components = {};
});

test('base Tabs', () => {
  const wrapper = mount(Tabs);
  const rate = wrapper.find('.nut-tabs');
  expect(rate.exists()).toBe(true);
});

test('base tabs props', async () => {
  const wrapper = mount(Tabs, {
    props: {
      modelValue: '0',
      background: '#f5f5f5',
      color: '#f5f5f5',
      direction: 'horizontal',
      type: 'smile',
      size: 'large',
      'title-scroll': true
    },
    components: {
      'nut-tabs': Tabs,
      'nut-tab-pane': TabPane
    }
  });
  await nextTick();
  const stepItem = wrapper.find('.nut-tabs__titles');
  expect((stepItem.element as HTMLElement).style.background).toEqual('rgb(245, 245, 245)');
  const _stepItem = wrapper.findAll('.horizontal');
  expect(_stepItem.length).toBe(1);
  const _stepItem1 = wrapper.findAll('.nut-tabs__titles')[0];
  expect(_stepItem1.classes()).toContain('smile');
  const _stepItem2 = wrapper.findAll('.nut-tabs__titles')[0];
  expect(_stepItem2.classes()).toContain('large');
  const _stepItem3 = wrapper.findAll('.nut-tabs__titles')[0];
  expect(_stepItem3.classes()).toContain('scrollable');
});

test('base other props', async () => {
  const wrapper = mount({
    components: {
      'nut-tabs': Tabs,
      'nut-tab-pane': TabPane
    },
    template: `
      <nut-tabs animatedTime="500" titleGutter="20">
        <nut-tab-pane paneKey="1">123</nut-tab-pane>
        <nut-tab-pane paneKey="2">456</nut-tab-pane>
      </nut-tabs>
    `
  });
  await nextTick();
  const stepItem = wrapper.find('.nut-tabs__content');
  expect((stepItem.element as HTMLElement).style.transitionDuration).toEqual('500ms');
  const stepItem1 = wrapper.find('.nut-tabs__titles-item');
  expect((stepItem1.element as HTMLElement).style.marginLeft).toEqual('20px');
});

test('base Tabs Slots', async () => {
  const wrapper = mount({
    components: {
      'nut-tabs': Tabs,
      'nut-tab-pane': TabPane,
      Dongdong
    },
    template: `
    <nut-tabs v-model="state.tab7value">
      <template v-slot:titles>
        <div
          class="nut-tabs__titles-item"
          @click="state.tab7value = item.paneKey"
          :class="{ active: state.tab7value == item.paneKey }"
          :key="item.paneKey"
          v-for="item in state.list6"
        >
          <Dongdong />
          <span class="nut-tabs__titles-item__text">{{ item.title }}</span>
          <span class="nut-tabs__titles-item__line"></span>
        </div>
      </template>
      <nut-tab-pane v-for="item in state.list6" :pane-key="item.paneKey">
        {{ item.title }}
      </nut-tab-pane>
    </nut-tabs>
    `,
    setup() {
      const state = reactive({
        tab7value: 'c1',
        list6: [
          {
            title: '自定义 1',
            paneKey: 'c1',
            icon: 'dongdong'
          },
          {
            title: '自定义 2',
            paneKey: 'c2',
            icon: 'JD'
          },
          {
            title: '自定义 3',
            paneKey: 'c3'
          }
        ]
      });
      return { state };
    }
  });
  await nextTick();
  const tab1 = wrapper.find('.nut-tabs__titles');
  expect(tab1.exists()).toBe(true);
  const tab2 = wrapper.findAll('.nut-tabs__titles-item');
  expect(tab2.length).toBe(3);
  const tab3 = wrapper.findAll('.nut-tabs__titles-item__text');
  expect(tab3[0].html()).toContain('自定义 1');
  expect(tab3[1].html()).toContain('自定义 2');
  expect(tab3[2].html()).toContain('自定义 3');
  const tab4 = wrapper.find('.nut-tabs__content');
  expect(tab4.exists()).toBe(true);
});

test('base Tabpane Props', async () => {
  const wrapper = mount({
    components: {
      'nut-tabs': Tabs,
      'nut-tab-pane': TabPane
    },
    template: `
    <nut-tabs v-model="state.tab2value">
      <nut-tab-pane title="Tab 1" pane-key="0"> </nut-tab-pane>
      <nut-tab-pane title="Tab 2" pane-key="1" :disabled="true"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    `,
    setup() {
      const state = reactive({
        tab2value: '0'
      });
      return { state };
    }
  });
  await nextTick();
  const tab = wrapper.findAll('.nut-tabs__titles-item');
  expect(tab.length).toBe(3);
  const tab1 = wrapper.findAll('.nut-tabs__titles-item')[1];
  expect(tab1.classes()).toContain('disabled');
  const tab2 = wrapper.findAll('.nut-tabs__titles-item')[0];
  expect(tab2.classes()).toContain('active');
  const tab3 = wrapper.findAll('.nut-tabs__titles-item__text');
  expect(tab3[0].html()).toContain('Tab 1');
});

test('base click', async () => {
  const wrapper = mount({
    components: {
      'nut-tabs': Tabs,
      'nut-tab-pane': TabPane
    },
    template: `
    <nut-tabs v-model="state.tab1value">
      <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    `,
    setup() {
      const state = reactive({
        tab1value: '0'
      });
      return { state };
    }
  });
  await nextTick();
  const tab = wrapper.find('.nut-tabs__titles-item');
  expect(tab.classes()).toContain('active');
  tab.trigger('click');
  const tab1 = wrapper.find('.nut-tabs__content');
  expect((tab1.element as HTMLElement).style.transform).toEqual('translate3d(-0%, 0, 0)');
});

test('Tabs: direction=vertical & title-gutter', async () => {
  const wrapper = mount({
    components: {
      'nut-tabs': Tabs,
      'nut-tab-pane': TabPane
    },
    template: `
    <nut-tabs direction="vertical" title-gutter="10">
      <nut-tab-pane pane-key="1" title="Tab 1"> Tab 1 </nut-tab-pane>
      <nut-tab-pane pane-key="2" title="Tab 2"> Tab 2 </nut-tab-pane>
      <nut-tab-pane pane-key="3" title="Tab 3"> Tab 3 </nut-tab-pane>
    </nut-tabs>
    `,
    setup() {
      const state = reactive({
        tab1value: '0'
      });
      return { state };
    }
  });
  await nextTick();
  const tab = wrapper.find('.nut-tabs__titles-item');
  expect(tab.html()).includes('margin-top: 10px');
});
