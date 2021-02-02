<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { computed, ref} from 'vue'
import Aside from './Aside.vue';
export default {
  name: "GuluLayout",
  setup(props,context){
  	const hasAside = ref(false);
		const defaults = context.slots.default()
		defaults.forEach((tag) => {
      if(tag.type.name === Aside.name) {
				hasAside.value = true;
      }
		})
    const classes = computed(()=>{
			return {[`gulu-layout`]:true,hasAside:hasAside.value};
    })

    return {
			classes,
			hasAside
    }
  }
}
</script>
<style lang="scss">
.gulu-layout {
    display: flex;
    flex-direction: column;
    .gulu-content {
        flex-grow:1;
    }
    &.hasAside{
      flex-direction: row;
    }
    & &{
      flex-grow: 1;
    }
}
</style>
