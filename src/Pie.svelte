<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, PieController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  interface $$Props<TData = DefaultDataPoint<'pie'>, TLabel = unknown>
    extends Omit<ChartBaseProps<'pie', TData, TLabel>, 'type'> {
    chart?: ChartJS<'pie', TData, TLabel> | null;
  }

  ChartJS.register(PieController);

  export let chart: $$Props['chart'] = null;
  let props: $$Props;

  $: props = $$props as $$Props;
</script>

<Chart bind:chart type="pie" {...props} />
