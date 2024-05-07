<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, BubbleController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  interface $$Props<TData = DefaultDataPoint<'bubble'>, TLabel = unknown>
    extends Omit<ChartBaseProps<'bubble', TData, TLabel>, 'type'> {
    chart?: ChartJS<'bubble', TData, TLabel> | null;
  }

  ChartJS.register(BubbleController);

  export let chart: $$Props['chart'] = null;
  let props: $$Props;

  $: props = $$props as $$Props;
</script>

<Chart bind:chart type="bubble" {...props} />
