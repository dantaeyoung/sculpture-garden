<template>
  <div id="app">
      <router-view name="nav" />
      <router-view name="view" />
  </div>
</template>

<script>

/* eslint-disable */

export default {
  name: "App",
  components: {
  },
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch('fetchData');
  },
  methods: {
  }
};
</script>

<style>



body {
  background: no-repeat center center fixed;
  background-color: lightgray;
}

#app {
  color: black;
  margin-top: 60px;
  padding: 1em;
}


</style>
