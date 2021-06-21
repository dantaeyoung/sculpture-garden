<template>
  <div>
      <div v-for="project of projects" :key="project.slug">
        <NuxtLink :to="{ name: 'projects-slug', params: { slug: project.slug } }">
          <div>
            <h2 :style="'color:' + project.color" >{{ project.title }}</h2>
          </div>
        </NuxtLink>
      </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const projects = await $content('projects')
        .only(['title', 'description', 'img', 'slug', 'author', 'color'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        projects
      }
    }
  }
</script>

