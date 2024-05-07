<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, ScatterController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  interface $$Props<TData = DefaultDataPoint<'scatter'>, TLabel = unknown>
    extends Omit<ChartBaseProps<'scatter', TData, TLabel>, 'type'> {
    chart?: ChartJS<'scatter', TData, TLabel> | null;
  }

  ChartJS.register(ScatterController);

  export let chart: $$Props['chart'] = null;
  let props: $$Props;

  $: props = $$props as $$Props;
</script>

<Chart bind:chart type="scatter" {...props} />
