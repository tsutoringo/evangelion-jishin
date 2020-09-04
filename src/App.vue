<template>
	<div id="app">
		<div style="width: 30%;height: 100%;overflow: scroll;">
			<eva-cut-card
				class="eva-red"
				v-for="([key, data], index) in Array.from(jishinData)"
				:key="index"
				:style="{
					margin: '10px',
					'--main-color': data.earthquake.maxScale.formatted.color
				}"
			>
				<eva-normal-title
					:title="data.issue.formattedType"
					:subtitle="`${$moment(data.time).format('YYYY年MM月DD日 HH:mm')} 発表(${$moment(data.time).fromNow()})`"
				/>
				<section v-if="data.points.length !== 0" style="display: flex;">
					<eva-badge text="範囲県" class="raised"/>
					<div style="position: relative;flex: 1">
						<div style="overflow-x: scroll;height: 100%;width: 100%;position: absolute;display: flex;white-space: nowrap;">
							<span
								v-for="(point, pointIndex) in data.points.separateArray()"
								:key="pointIndex"
								style="padding: 0 3px;"
							>{{point.pref}}</span>
						</div>
					</div>
				</section>
				<section data.earthquake.hypocenter>
					<div style="display: flex;">
						<div 
							:style="{
								width: '80px',
								height: '80px',
								'line-height':'80px',
								'text-align':'center',
								'font-size': '50px',
								'background-color': data.earthquake.maxScale.formatted.color
							}"
							v-if="data.earthquake.maxScale != void 0"
						>
							{{data.earthquake.maxScale.formatted.scale}}
							<small style="font-size: initial;">{{data.earthquake.maxScale.formatted.suffix}}</small>
						</div>
					</div>
				</section>
				<eva-denger-border style="height: 20px;"/>
			</eva-cut-card>
		</div>
	</div>
</template>

<script>
import p2p_Client from "./p2p_client"
const p2p = new p2p_Client();

export default {
	name: 'App',
	components: {},
	data: () => {
		return {
			jishinData: []
		}
	},
	mounted: async function(){
		this.jishinData = await p2p.getQuakeList({limit: 10})
	}
}
</script>

<style>
body {
	margin: 0;
	background-image: url(https://i.redd.it/z7ucfs32nnv21.png);
	background-size: cover;
	background-position: center;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	width: 100%;
	height: 100vh;
	overflow: hidden;
}
section {
	padding: 5px;
}
</style>
