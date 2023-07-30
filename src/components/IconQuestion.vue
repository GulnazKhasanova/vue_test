<template>
  <div class="info">
    <font-awesome-icon class="triang" icon="fa-regular fa-circle-question" />
    <div class="hint">
      Динамика продаж
    </div>
  </div>
</template>

<script>
export default {
name: "IconQuestion"
}
</script>

<style lang="scss" scoped>
.info{
  display: flex;
  position: absolute;
  top: 7px;
  right: 20px;
  }
.hint{
  opacity:0;
  position:absolute;
  margin-top:25px;
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
.hint::after {
  content: '';
  position: absolute; /* Абсолютное позиционирование */
  left: 60px; bottom: 65px; /* Положение треугольника */
  border: 10px solid transparent; /* Прозрачные границы */
  border-bottom: 10px solid #585757; /* Добавляем треугольник */
}

</style>