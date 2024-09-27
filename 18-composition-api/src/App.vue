<template>
  <!-- <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ hanyName }}</h3>
    <button @click="updateAge('newVal')">update</button>
  </section> -->
  <section class="container">
    <h2>{{ data2.hanyName }}</h2>
    <h3>{{ data2.name }}</h3>
    <button @click="updateAge('newVal')">update</button>
  </section>
  <section class="container">
    <h2>
      {{ data.about }}
    </h2>
    <h2>
      {{ data.data }}
    </h2>
    <button @click="updateMe('Front End Developer')">update Me</button>
  </section>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    // const Name = ref('composition api');
    // let hanyName = ref('hanyName');

    const data2 = reactive({
      name: 'composition-api',
      hanyName: 'hanyName',
    });

    const data = ref({
      about: 'aboutMy',
      data: 'hello there ',
    });
    function updateAge(value) {
      console.log(data2);

      data2.hanyName = value;
    }

    // setTimeout(() => {
    //   data.value.about = 'aboutYou';
    //   data.value.data = 'Backend developer';
    // }, 2000);
    function updateMe(value) {
      data.value.data = value;
    }
    return { updateAge, data, updateMe, data2 };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
