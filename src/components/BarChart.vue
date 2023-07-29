<template>
  <div >
    <vue3-chart-js
        v-bind="{ ...barChart }"
    ></vue3-chart-js>
  </div>
</template>
<script >
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'
import {reactive, watch } from 'vue'
// import { watchEffect } from 'vue'

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
    const chaertAttr = reactive(props.chartColor)
    watch(()=>props.chartColor, (newValue)=>{
      chaertAttr.value = newValue
    })
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
        labels:  Object.values(chaertAttrData).map(item=> Object.values(item)[0]),
        datasets: [
          {
            label: "Chart", //Object.values(chaertAttrData).map(item=> Object.values(item)[0]),
            backgroundColor: Object.values(chaertAttr),
            data: Object.values(chaertAttrData).map(item=> Object.values(item)[1]),
          },
        ],
      },
    };


      return {
        barChart,
      };
  },
};
</script>

<style lang="scss" scoped>
div{
  height:249px;
  width: 498px;
  display: flex;
  flex-direction:column;
}
.border{
  border: 1px solid rgb(0, 0, 0, 20%);
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
}
</style>