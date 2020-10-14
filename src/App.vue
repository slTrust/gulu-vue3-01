<template>
<router-view></router-view>
</template>

<script lang="ts">
import {
  ref,
  provide
} from 'vue'
export default {
  name: 'App',
  setup() {
    const menuVisible = ref(false)
    provide('menuVisible', menuVisible) // app根组件设置一个值 ，其他组件通过 inject可以获得值
  }
}
</script>
