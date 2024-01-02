<template>
  <div id="app">
    <Calculator />


  </div>
</template>

<script>
import Calculator from './components/Calculator.vue';

export default {
  components: {
    Calculator,

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: rgb(0, 0, 0);
  margin-top: 60px;
}
</style>
