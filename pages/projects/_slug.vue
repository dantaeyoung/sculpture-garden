<template>
  <project>
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <nuxt-content :document="project" class="project" />
  </project>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const project = await $content('projects', params.slug).fetch()
      return { project }

    }
  }
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
  background-color: pink;
}
</style>
