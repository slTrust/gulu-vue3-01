<template>
  <button @click="toggle"
          :class="{checked:value }"> <span></span> </button>
  <div>{{value}}</div>
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
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:focus {
  outline: none;
}
</style>