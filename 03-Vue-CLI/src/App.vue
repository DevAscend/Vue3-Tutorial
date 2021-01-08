<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Welcome to this tutorial</h1>
  <h2>{{ fruit }}</h2>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fruit: "Apple",
    };
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
