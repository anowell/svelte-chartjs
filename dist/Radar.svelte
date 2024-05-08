<script>
  import { Chart as ChartJS, RadarController } from 'chart.js';
  import Chart from './Chart.svelte';
  ChartJS.register(RadarController);
  export let chart = null;
  let props;
  $: props = $$props;
</script>

<Chart bind:chart type="radar" {...props} />
