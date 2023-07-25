<template>
  <div>
    <vue3-chart-js
        v-bind="{ ...barChart }"
    ></vue3-chart-js>
  </div>
</template>
<script >
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import { reactive } from 'vue'

export default {
  components: {
    Vue3ChartJs
  },
  props: {
    analyticallyData:{
      type: Object
    },
    chartColor: {
      type: Object
    }
  },
  setup (props) {
    const propses = reactive(props)
    const chaertAttrData = Object.values( propses.analyticallyData)
    const chaertAttrColor = Object.values(propses.chartColor)
    const barChart = {
      type: "bar",
      options: {
        min: 0,
        max: 1000,
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            min: 5,
            max: 1000,
            ticks: {
              callback: function (value) {
                return `${value}` ;
              },
            },
          },
        },
      },
      data: {
        labels: Object.values(chaertAttrData).map(item=> Object.values(item)[0]),
        datasets: [
          {
            label: Object.values(chaertAttrData).map(item=> Object.values(item)[0]),
            backgroundColor: Object.values(chaertAttrColor),
            data: Object.values(chaertAttrData).map(item=> Object.values(item)[1]),
          },
        ],
      },
    };
        // watchEffect(() => {
        //   // Обновляем данные графика
        //   barChart.data.labels = Object.values(chaertAttrData).map(item => Object.values(item)[0])
        //   barChart.data.datasets[0].data = Object.values(chaertAttrData).map(item => Object.values(item)[1])
        //   // barChart.data.datasets[1].backgroundColor = Object.values(chaertAttrColor)
        // })

      return {
        barChart,
      };
  },
};
</script>

<style scoped>
div{
  height:600px;
  width: 600px;
  display: flex;
  flex-direction:column;
}
</style>