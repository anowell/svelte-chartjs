<script>
  import { Chart as ChartJS, PieController } from 'chart.js';
  import Chart from './Chart.svelte';
  ChartJS.register(PieController);
  export let chart = null;
  let props;
  $: props = $$props;
</script>

<Chart bind:chart type="pie" {...props} />
