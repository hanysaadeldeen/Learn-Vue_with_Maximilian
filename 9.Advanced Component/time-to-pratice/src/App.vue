<template>
  <section>
    <button class="blue" @click="visible = 'Blue-Div'">
      Load Blue Template
    </button>
    <button class="Green" @click="visible = 'Green-Div'">
      Load Green Template
    </button>
    <button class="Red" @click="visible = 'Red-Div'">Load Red Template</button>
    <hr />

    <component :is="visible">
      <h1 v-if="visible === 'Blue-Div'">this color is blue</h1>
      <h1 v-if="visible === 'Green-Div'">this color is Green</h1>
      <h1 v-if="visible === 'Red-Div'">this color is Red</h1>
      <!-- <Blue-Div>
        <h1>this color is blue</h1>
      </Blue-Div>
      <Red-Div>
        <h1>this color is Red</h1>
      </Red-Div>
      <Green-Div>
        <h1>this color is Green</h1>
      </Green-Div> -->
    </component>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visible: "Blue-Div",
    };
  },
  methods: {},
};
</script>

<style scoped>
button {
  margin: 10px;
  border: 1px solid #eee;
  color: white;
  padding: 10px 14px;
  cursor: pointer;
}
button.blue {
  background: rgba(0, 0, 255, 0.667);
}
button.Red {
  background: rgba(255, 0, 0, 0.68);
}
button.Green {
  background: rgba(0, 128, 0, 0.608);
}
h1 {
  color: white;
}
</style>
