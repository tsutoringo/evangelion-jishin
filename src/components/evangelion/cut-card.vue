<template>
	<div class="eva card-cut">
		<div class="container">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'eva-cut-card'
}
</script>
<style scoped>
div.eva.card-cut {
	position: relative;
	background-color: var(--main-color);
	padding: 1px;
	clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%);
}
div.eva.card-cut>div.container {
	background-color: var(--eva-bg-color);
	clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%);
}
</style>