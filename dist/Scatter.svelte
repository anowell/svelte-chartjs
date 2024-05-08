<script>
  import { Chart as ChartJS, ScatterController } from 'chart.js';
  import Chart from './Chart.svelte';
  ChartJS.register(ScatterController);
  export let chart = null;
  let props;
  $: props = $$props;
</script>

<Chart bind:chart type="scatter" {...props} />
