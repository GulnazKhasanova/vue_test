<template>
  <div v-if="analyticallyData.length > 0">
  <BarChart  :analyticallyData="analyticallyData" :chartColor="{selectedColor:selectedColor.value}" />
        <select name="chart_color" id="chart_color" v-model="selectedColor"  >
          <option v-for="(label, key) in labels"
                  :key="key" :value="label" > {{ label.name }}
          </option>
        </select>
  </div>
  <div v-else>
      Загрузка данных...
  </div>
</template>

<script >
import BarChart from "@/components/BarChart";

export default {
  components: {
    BarChart
  },

  data() {
    return {
      labels: [
        {
          name: "Зеленый",
          value: "#2ecc71"
        },
        {
          name: "Оранжевый",
          value: "#e67e22"
        },
        {
          name: "Фиолетовый",
          value: "#9b59b6"
        },
        {
          name: "Голубой",
          value: "#2980b9"
        }
      ],
      selectedColor: {name: "Голубой",
                      value: "#2980b9"},
      chartColor: null,
      analyticallyData: []
    }
  },
  async created() {
    try {
      // Загружаем данные
      this.analyticallyData = await this.fetchAnalitic();
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  },
  methods: {
    async fetchAnalitic() {
      // Получаем данные
      const response = await fetch("/data.json/");
      // Если успешно, возвращаем данные
      if (response.ok) {
        return await response.json();
      } else {
        // иначе, выбрасываем ошибку
        throw new Error("Ошибка при загрузке данных");
      }
    }
  ,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
