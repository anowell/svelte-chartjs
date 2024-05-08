<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import { Chart as ChartJS } from 'chart.js';
  import { useForwardEvents } from './utils/index.js';
  function clean(props2) {
    let {
      data: data2,
      type: type2,
      options: options2,
      plugins: plugins2,
      children,
      $$scope,
      $$slots,
      ...rest
    } = props2;
    return rest;
  }
  export let type;
  export let data = {
    datasets: [],
  };
  export let options = {};
  export let plugins = [];
  export let updateMode = void 0;
  export let chart = null;
  let canvasRef;
  let props = clean($$props);
  let { addEventListeners, removeEventListeners } = useForwardEvents(
    () => canvasRef
  );
  onMount(() => {
    chart = new ChartJS(canvasRef, {
      type,
      data,
      options,
      plugins,
    });
    addEventListeners(props);
  });
  afterUpdate(() => {
    if (!chart) return;
    chart.data = data;
    Object.assign(chart.options, options);
    chart.update(updateMode);
  });
  onDestroy(() => {
    if (chart) {
      chart.destroy();
      removeEventListeners();
      chart = null;
    }
  });
</script>

<canvas bind:this={canvasRef} {...props} />
