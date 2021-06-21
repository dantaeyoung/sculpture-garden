<template>
  <div id="nav">
    <NuxtLink to="/">home</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
    <NuxtLink to="/projects">projects</NuxtLink>
  </diV>
</template>

<style lang="scss">

.backgrounds {
/*    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;*/
    opacity: 0.9;

}

.background {
	position: fixed;
	top: 0px;
	left: 0px;
	margin: 0px;
	padding: 0px;
	height: 100%;
	width: 100%;
/*	transition: opacity 1s; */
}
#background-over { z-index: 20; }
#background-under { z-index: 10; }



</style>
