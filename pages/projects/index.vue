<template>
  <div>
      <div v-for="project of projects" :key="project.slug">
        <NuxtLink :to="{ name: 'projects-slug', params: { slug: project.slug } }">
          <div>
            <h2 >{{ project.title }}</h2>
            {{ project.description }} 
            <img :src="project.images[0]" />
            {{ project.date}} 
          </div>
        </NuxtLink>
      </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const projects = await $content('projects')
        .only(['title', 'description', 'images', 'slug', 'author', 'color', 'date'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        projects
      }
    }
  }
</script>

