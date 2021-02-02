<demo>
  ButtonGroup
</demo>
<template>
  <div>
      <ButtonGroup>
        <Button size="big">左</Button>
        <Button size="big">中</Button>
        <Button size="big">右</Button>
      </ButtonGroup>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button/Button.vue'
import ButtonGroup from '../../lib/Button/ButtonGroup.vue'

export default {
    components: {
        Button, ButtonGroup
    },
}
</script>