<template>
  <section>
    <button @click="whitckOne('Quote-message')">Auote Message</button>
    <button @click="visible = 'New-Com'">New Com</button>
    <button @click="whitckOne('Author-Com')">Author Com</button>
  </section>

  <component :is="visible"> </component>
  <!-- <Quote-message :props="testProps" v-if="visible === 'Auote'">
    <template v-slot:title>
      <h1>{{ quote }}</h1>
    </template>
    <h2>{{ testProps }}</h2>
    <h3>{{ testProp2 }}</h3> -->
  <!-- <template v-slot:subtitle>
      <h4>hello subtitle</h4>
    </template> -->
  <!-- </Quote-message>
  <Author-Com v-if="visible === 'Author'"></Author-Com>
  <New-Com v-if="visible === 'New'"></New-Com> -->
</template>

<script>
export default {
  data() {
    return {
      quote: "Hello this is the first quote!!!!",
      testProps: "propss!!!",
      testProp2: "testProps!!!",
      visible: "Quote-message",
    };
  },
  methods: {
    whitckOne(value) {
      console.log(value);
      this.visible = value;
    },
  },
};
</script>

<style scoped>
button {
  margin: 10px;
  border: 2px solid #ddd;
  background: rgb(184, 0, 0);
  color: white;
  padding: 10px 14px;
  cursor: pointer;
}
section {
  max-width: 500px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 22px 20px 86px -27px rgba(184, 153, 184, 1);
}
</style>
