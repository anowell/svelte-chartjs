<script>
  import { Bar } from 'svelte-chartjs';
  import { data } from './data.js';

  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  function onclick() {
    console.log('Chart component has been clicked');
  }
</script>

<Bar {data} options={{ responsive: true }} {onclick} />
