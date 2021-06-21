<template>
  <div>
  projects parent
  <NuxtChild />
  </div>
</template>

<script>
export default {
  data () {
    return {
      nestedRoutes: []
    }
  },
  created () {
    this.$router.options.routes.forEach((routeOption) => {
      if (routeOption.path.startsWith(this.$route.path)) {
        this.nestedRoutes.push({
          name: routeOption.name,
          path: routeOption.path,
        })
      }
    })
  }
}
</script>
