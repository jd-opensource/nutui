<template>
  <div class="doc-header doc-header-black">
    <div class="header-logo">
      <a class="logo-link" href="#" @click="toHome"></a>
    </div>
    <div class="tabs">
      <div
        v-for="type in tabs"
        :key="type"
        class="tab-item"
        :class="{ cur: activeTab === type }"
        @click="router.push(route.path.replace(/^\/(h5|taro)\//, `/${type}/`))"
      >
        {{ type }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RefData } from '@/sites/assets/util/ref'
const route = useRoute()
const router = useRouter()
const tabs = ['h5', 'taro'] as const
// route.path 是响应式的，路由切换时自动更新选中态
const activeTab = computed<'h5' | 'taro'>(() => {
  return route.path.startsWith('/taro/') ? 'taro' : 'h5'
})
const toHome = () => {
  RefData.getInstance().currentRoute.value = '/'
}
</script>

<style lang="scss" scoped>
.doc-header {
  height: $doc-header-height;
  line-height: $doc-header-height;
  padding: 0 50px;
  width: 100%;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header-logo {
  position: relative;
  display: inline-block;
  width: 240px;
  height: 64px;
  .logo-link {
    width: 120px;
    height: 46px;
    vertical-align: middle;
    position: absolute;
    top: 50%;
    margin-top: -23px;
  }
  .logo-border {
    width: 1px;
    height: 26px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -13px;
  }
}

.tabs {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 2px;
  box-sizing: border-box;

  border-radius: 2px;
  background: #eee;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 4px;
  &.single {
    padding: 0;
    .tab-item {
      line-height: 40px;
      cursor: auto;
    }
  }
  .tab-item {
    position: relative;
    padding: 0 10px;
    line-height: 36px;
    cursor: pointer;
    font-size: 16px;
    color: #323232;
    text-align: center;
    border-radius: 2px;
    background: #eee;
    &.cur {
      font-weight: bold;
      color: #323232;
      background: #fff;
    }
  }
}
// 颜色
.doc-header-black {
  background: black;
  color: $theme-black-word;
  border-bottom: 1px solid $theme-black-box-border;
  .header {
    &-logo {
      .logo-link {
        background: url('../../assets/images/logo-header-red.png') no-repeat center/100%;
      }
      .logo-border {
        background: $theme-black-border;
      }
    }
  }
}
</style>
