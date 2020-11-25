<template>
  <div class="nav">
    Nav
      <router-link :to="{ name: 'Intro' }">Intro</router-link>
      <router-link :to="{ name: 'HelloWorld' }">HelloWorld</router-link>
  </div>
</template>

<script>

export default {
  name: "Nav",
  data() {
    return {};
  },
  components: {
  },
  computed: {
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.nav {
  border-bottom: 1px solid black;
  padding: 10px;
}

</style>

