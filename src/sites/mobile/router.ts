import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from './components/Index.vue';
import IndexTaro from './components/IndexTaro.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: Index
  }
];

/** webpack */
// const files = require.context('@/packages', true, /demo\.vue$/);
// files.keys().forEach(component => {
//   const componentEntity = files(component).default;
//   routes.push({
//     path: `/${componentEntity.baseName}`,
//     name: componentEntity.baseName,
//     component: componentEntity
//   });
// });

/** vite */
const modulesPage = import.meta.glob('/src/packages/__VUE/**/demo.vue');

for (const path in modulesPage) {
  let name = (/packages\/__VUE\/(.*)\/demo.vue/.exec(path) as any[])[1];
  routes.push({
    path: '/' + name,
    component: modulesPage[path],
    name
  });

  routes.push({
    path: '/' + name + '-taro',
    component: IndexTaro,
    name: name + '-taro'
  });
}

routes.push({
  name: 'NotFound',
  path: '/:path(.*)+',
  redirect: () => '/'
});

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
