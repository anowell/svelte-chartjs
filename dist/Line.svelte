<script>
  import { Chart as ChartJS, LineController } from 'chart.js';
  import Chart from './Chart.svelte';
  ChartJS.register(LineController);
  export let chart = null;
  let props;
  $: props = $$props;
</script>

<Chart bind:chart type="line" {...props} />
