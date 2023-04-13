<script>
	
	import { LayerCake, Svg } from 'layercake';
	import { scaleLinear } from 'd3-scale';

	import Radar from './Radar.svelte';
	import AxisRadial from './AxisRadial.svelte';

	import data from './radarScores.js';

	const seriesKey = 'name';
	const xKey = ['social', 'creative', 'logic', 'practical', 'personal'];

	const seriesNames = Object.keys(data[0]).filter(d => d !== seriesKey);

	data.forEach(d => {
		seriesNames.forEach(name => {
			d[name] = +d[name];
		});
	});
</script>

<style>
	/*
		The wrapper div needs to have an explicit width and height in CSS.
		It can also be a flexbox child or CSS grid element.
		The point being it needs dimensions since the <LayerCake> element will
		expand to fill it.
	*/
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>

<div class="chart-container">
	<LayerCake
		padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
		x={xKey}
		xDomain={[0, 10]}
		xRange={({ height }) => [0, height / 2]}
		data={data}
	>
		<Svg>
			<AxisRadial/>
			<Radar/>
		</Svg>
	</LayerCake>
</div>