<template>
  <div class="gulu-col">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "GuluCol"
	}
</script>
<style lang="scss">
  .gulu-col{
    height: 50px;
    $class-prefix: gulu-col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width:($n/24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left:($n/24) * 100%;
      }
    }
  }


</style>
