<template>
  <div :class="classes">
    <Nav />
    <Nuxt />
  </div>
</template>

<style>
</style>

<script>

export default {
  data() {
    return {
    };
  },
  computed: {
    darkmode() {
      return this.$store.state.darkmode;
    },
    classes() {
      return {
        darkmode: this.darkmode,
      };
    },
  },
}
</script>
 
