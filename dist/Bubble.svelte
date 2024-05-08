<script>
  import { Chart as ChartJS, BubbleController } from 'chart.js';
  import Chart from './Chart.svelte';
  ChartJS.register(BubbleController);
  export let chart = null;
  let props;
  $: props = $$props;
</script>

<Chart bind:chart type="bubble" {...props} />
