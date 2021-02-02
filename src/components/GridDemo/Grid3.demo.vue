<demo>
  常规使用 class="gulu-col-8"
</demo>
<template>
  <div>
    <Row>
      <Col class="gulu-col-8"></Col>
      <Col class="gulu-col-8"></Col>
      <Col class="gulu-col-8"></Col>

    </Row>
  </div>
</template>

<script lang="ts">
  import Row from '../../lib/Grid/Row.vue'
  import Col from '../../lib/Grid/Col.vue'

  export default {
    components: {
      Row,Col
    },
  }
</script>