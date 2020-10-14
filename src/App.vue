<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { router } from './router'
import { ref, provide } from 'vue'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false : true)
    provide('menuVisible', menuVisible) // app根组件设置一个值 ，其他组件通过 inject可以获得值

    router.afterEach(() => {
      console.log(width)
      if (width <= 500) {
        menuVisible.value = false
      }
    })
  },
}
</script>
