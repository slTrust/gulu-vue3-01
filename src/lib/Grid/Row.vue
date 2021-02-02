<template>
  <div class="gulu-row">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "GuluRow"
	}
</script>
<style lang="scss">
.gulu-row{
  display: flex;
  flex-wrap: wrap;
}
</style>
