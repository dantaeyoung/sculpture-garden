<template>
	<div id="logo" @click="toggleDarkmode">
      <img src="~/static/images/logo_dtl.svg" />
	</div>
</template>

<style lang="scss" scoped>
#logo {
    max-width: 180px;
}

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
  },
  methods: {
    toggleDarkmode() {
      console.log("YUO");
      this.$store.commit("setDarkmode", !this.darkmode);
    },
  },
}
</script>
