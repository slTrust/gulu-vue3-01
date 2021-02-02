<demo>
  常规使用
</demo>
<template>
  <div>
    <Layout style="height: 200px;">
      <Header>
        header
      </Header>
      <Layout>
        <Content>
          content
        </Content>
        <Aside>aside</Aside>
      </Layout>
      <Footer>
        footer
      </Footer>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Layout from '../../lib/layout/Layout.vue'
  import Header from '../../lib/layout/Header.vue'
  import Footer from '../../lib/layout/Footer.vue'
  import Content from '../../lib/layout/Content.vue'
  import Aside from '../../lib/layout/Aside.vue'

  export default {
    components: {
      Layout,
      Header,
      Footer,
      Content,
      Aside
    },
  }
</script>