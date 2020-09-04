<template>
	<div>
		<h3>{{title}}</h3>
		<small>{{subtitle}}</small>
	</div>
</template>
<script>
export default {
	name: 'eva-normal-title',
	props: {
		title: {
			type: String,
			required: true
		},
		subtitle: {
			type: String,
			required: false,
			default: ''
		}
	}
}
</script>
<style scoped>
div {
	padding: 10px;
	padding-left: 3px;
	border-left: 5px solid var(--main-color);
}
div>h3 {
	margin: 0;
	color: var(--eva-color);
}
div>small {
	color: var(--eva-color-disabled)
}
</style>
