<template>
  <div class="gulu-button-group">
    <slot/>
  </div>
</template>
<script lang="ts">
import { computed ,onMounted} from 'vue'
import {Button} from "../index"
export default {
    setup(props,context) {
        onMounted(()=>{
            console.log(1)
        })

        const defaults = context.slots.default()
        defaults.forEach((tag) => {
            // @ts-ignore
            if (tag.type.name !== Button.name) {
                throw new Error('ButtonGroup 子标签必须是 Button')
            }
        })
    },
}
</script>
<style lang="scss">
  $border-radius:4px;
  .gulu-button-group{
    display:inline-flex;
    vertical-align: middle;
    > .gulu-button{
      border-radius: 0;
      /*
       如果不是第一个元素，左边框就没
       此时导致了一个bug 就是 hover的时候 会导致只剩下三个方向的边框
       &:not(:first-child){border-left:none;}
       使用 margin负值
       在hover的瞬间 z-index增加权重
      */
      &:not(:first-child){
        /* 不是第一个元素才有margin负值 */
        margin-left:-1px;
      }
      &:first-child{
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child{
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover,&:active,&:focus{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>