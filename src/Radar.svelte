<script lang="ts">
  import type { DefaultDataPoint } from 'chart.js';
  import { Chart as ChartJS, RadarController } from 'chart.js';
  import type { ChartBaseProps } from './types/index.js';
  import Chart from './Chart.svelte';

  interface $$Props<TData = DefaultDataPoint<'radar'>, TLabel = unknown>
    extends Omit<ChartBaseProps<'radar', TData, TLabel>, 'type'> {
    chart?: ChartJS<'radar', TData, TLabel> | null;
  }

  ChartJS.register(RadarController);

  export let chart: $$Props['chart'] = null;
  let props: $$Props;

  $: props = $$props as $$Props;
</script>

<Chart bind:chart type="radar" {...props} />
