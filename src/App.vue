<template>
  <div class="container w-100" v-if="analyticallyData.length > 0">
      <div class="row p-2">
        <div class="col-12 col-lg-5 border mt-2 py-2 select" >
      <BarChart  :analyticallyData="analyticallyData" :chartColor="{selectedColor:selectedColor.value}" />
          <div class="info">
            <font-awesome-icon icon="fa-regular fa-circle-question" />
             <div class="hint">
               Динамика продаж
             </div>
          </div>
        </div>
      <div class="col-12 col-lg-5 border mt-2 py-2 select" >
            <label>Выбрать цвет</label>
              <select class="form-select" name="chart_color" id="chart_color" v-model="selectedColor"  >
                <option v-for="(label, key) in labels"
                        :key="key" :value="label" > {{ label.name }}
                </option>
              </select>
      </div>
    </div>

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
      selectedColor: {
        name: "Голубой",
        value: "#2980b9"
      },
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

<style lang="scss">
.hint-enter-active,
.hint-leavel-active{
  transition: opacity 0.9s ease;
}
.hint-enter-from,
.hint-leavel-from{
  opacity:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
.border{
  border: 1px solid rgb(0, 0, 0, 20%);
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  .info{
    display: flex;
    position: absolute;
    top: 7px;
    right: 20px;
    .hint{
      opacity:0;
      position:absolute;
      margin-top:20px;
      padding: 10px 7px 10px 7px;
      right: -10px;
      background-color:#585757;
      border-radius:10px;
      color: #fff;
      transition: opacity 0.9s ease;
    }
    .hint:hover{
      opacity: 1;
    }

  }
}
.select{
  position: relative;
  label{
    position: absolute;
    top: 0px;
    left: 20px;
    background: #ffffff;
    padding: 0 4px;
    font-size: 12px;}
}
</style>
