<template>
  <div id="nav">
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
    <NuxtLink to="/projects">projects</NuxtLink>
  </diV>
</template>

<style lang="scss" scoped>

a {
  margin-right: 10px;
}

#nav {
  width: 50vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: middle;
  justify-content: center;
  z-index: 1;
  position: absolute;
}


</style>
