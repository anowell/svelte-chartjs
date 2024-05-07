<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, LineController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  interface $$Props<TData = DefaultDataPoint<'line'>, TLabel = unknown>
    extends Omit<ChartBaseProps<'line', TData, TLabel>, 'type'> {
    chart?: ChartJS<'line', TData, TLabel> | null;
  }

  ChartJS.register(LineController);

  export let chart: $$Props['chart'] = null;
  let props: $$Props;

  $: props = $$props as $$Props;
</script>

<Chart bind:chart type="line" {...props} />
