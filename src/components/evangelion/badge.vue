<template>
	<span>{{text}}</span>
</template>
<script>
export default {
	name: 'eva-badge',
	props: {
		text: {
			type: String,
			default: ''
		}
	}
}
</script>
<style scoped>
span {
	padding: 0 5px;
	margin: 0 5px;
	color: var(--main-color);
	border: 1px solid var(--main-color);
	border-radius: 3px;
}
span.raised {
	color: var(--eva-color);
	background-color: var(--main-color);
	border: 1px solid var(--main-color);
}
</style>