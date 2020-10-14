<template>
  <div>
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
export default {
  // 继承属性改为 false, 这样 div就不会再有 外面绑定的事件了
  inheritAttrs: false,
  setup(porps, context) {
    const { size, ...rest } = context.attrs
    return { size, rest }
  },
}
</script>
</script>
<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style> 