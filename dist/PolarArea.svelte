<script>
  import { Chart as ChartJS, PolarAreaController } from 'chart.js';
  import Chart from './Chart.svelte';
  ChartJS.register(PolarAreaController);
  export let chart = null;
  let props;
  $: props = $$props;
</script>

<Chart bind:chart type="polarArea" {...props} />
