<template>
  <project>
    <h1 :style="'color:' + project.color">{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <nuxt-content :document="project" class="project" />
  </project>
</template>

<script>
export default {
  data() {
    return {};
  },
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();
    return { project };
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: this.project.title,
          content: this.project.description,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
body {
  width: 80vw;
  margin: auto;
}

.project {
  max-width: 600px;
}

img {
  max-width: 100%;
}

.formal {
  font-family: "Benne", serif;
  position: relative;
  padding: 10px;
  background-color: pink;
  right: -200px;
}
</style>
