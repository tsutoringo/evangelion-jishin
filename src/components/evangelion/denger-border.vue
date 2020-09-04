<template>
	<div class="evangelion eva-denger-border"></div>
</template>
<script>
export default {
	name: 'eva-denger-border'
}
</script>
<style scoped>
div.eva-denger-border {
	background-image: linear-gradient(
		-45deg,
		var(--main-color) 35%,
		transparent 35%,
		transparent 50%,
		var(--main-color) 50%,
		var(--main-color) 85%,
		transparent 85%,
		transparent 100%
	);
	background-size: 50px 50px;
	background-position: fixed;
}
</style>