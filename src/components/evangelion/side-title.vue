<template>
	<div class="eva side-title">
		<h4>{{ title }}</h4>
		<div>
			<slot/>
		</div>
	</div>
</template>
<script>
export default {
	name: 'eva-side-title',
	props: {
		title: {
			type: String,
			required: true
		}
	}
}
</script>
<style scoped>
div.eva.side-title {
	display: flex;
	overflow: hidden;
}
div.eva.side-title>h4 {
	writing-mode: vertical-rl;
	margin: 0;
	background-color: var(--main-color);
	color: var(--eva-bg-color);
	text-align: center;
	padding: 3px;
	min-height: 50px;
}
div.eva.side-title>div {
	flex: 1;
	padding: 8px 5px;
}
</style>