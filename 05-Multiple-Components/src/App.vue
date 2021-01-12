<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Welcome to this tutorial</h1>
  <h2 ref="subtitle">{{ fruit }}</h2>
  <button @click="handleClick">Click me</button>
  <Card />
  <Card />
  <Card />
</template>

<script>
import Card from "./components/Card.vue";
export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      fruit: "Apple",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.subtitle);
      this.$refs.subtitle.classList.add("custom-class");
    },
  },
};
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
