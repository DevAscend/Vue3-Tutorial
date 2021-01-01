const app = Vue.createApp({
  data() {
    return {
      fruit: "Apple",
      amount: 1,
      showButtons: false,
    };
  },
  methods: {
    changeFruit(fruitName) {
      this.fruit = fruitName;
    },
    toggleButtons() {
      this.showButtons = !this.showButtons;
    },
  },
});

app.mount("#app");
