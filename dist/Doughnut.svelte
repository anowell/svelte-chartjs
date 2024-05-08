<script>
  import { Chart as ChartJS, DoughnutController } from 'chart.js';
  import Chart from './Chart.svelte';
  ChartJS.register(DoughnutController);
  export let chart = null;
  let props;
  $: props = $$props;
</script>

<Chart bind:chart type="doughnut" {...props} />
