<template>
  <button class="gulu-switch"
          @click="toggle"
          :class="{'gulu-checked':value}">
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const checked = ref(false)
    const toggle = () => {
      /* v-model 尤雨溪规定的  props的 key叫xxx 这里 emit的时候 就要 'update:xxx'

        使用 v-model
        原来 
          <Switch :value="y" @input="y = $event"/>
          context.emit('input', !props.value)
        现在
          <Switch v-model:value="y"/>
          context.emit('update:value', !props.value)
       */
      context.emit('update:value', !props.value)
    }
    return { checked, toggle }
  },
}
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.gulu-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.gulu-checked :active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>