<script>
  import { Chart as ChartJS, BarController } from 'chart.js';
  import Chart from './Chart.svelte';
  ChartJS.register(BarController);
  export let chart = null;
  let props;
  $: props = $$props;
</script>

<Chart bind:chart type="bar" {...props} />
