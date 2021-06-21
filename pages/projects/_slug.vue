<template>
  <project>
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <nuxt-content :document="project" />


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
