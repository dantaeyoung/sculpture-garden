<template>
	<div class="dots">
	</div>
</template>

<style lang="scss" scoped>


.dots {
    &.height100 { height: 100px; }
    &.height200 { height: 200px; }
    &.height400 { height: 400px; }
    width: calc(50% - 3px); 
    border-right: 5px dotted rgba(55,55,55,0.4);

    .darkmode & {
        border-right: 5px dotted rgba(195,195,195,0.7);
    }
}



</style>
