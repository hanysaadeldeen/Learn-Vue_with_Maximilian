<template>
  <!-- <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ hanyName }}</h3>
    <button @click="updateAge('newVal')">update</button>
  </section> -->
  <section class="container">
    <h2>{{ hanyName.hanyName }}</h2>
    <h3>{{ name.name }}</h3>
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
  <section class="container">
    <h2>
      {{ test1 }}
    </h2>
    <h2>
      {{ test2 }}
    </h2>
    <button @click="updateMe('Front End Developer')">update Me</button>
  </section>
</template>

<script>
import { ref, reactive, isRef, isReactive, toRefs } from 'vue';

export default {
  setup() {
    // const Name = ref('composition api');
    let testU = ref('hanyName');

    const data2 = reactive({
      name: 'composition-api',
      hanyName: 'hanyName',
    });

    console.log(isRef(testU));
    console.log(isReactive(data2));

    const toRefUser = toRefs(data2);
    console.log(toRefUser.name);

    const data = ref({
      about: 'aboutMy',
      data: 'hello there ',
    });

    setTimeout(() => {
      updateAge('test');
    }, 2000);

    function updateAge(value) {
      data2.hanyName = value;
    }

    function updateMe(value) {
      data.value.data = value;
    }
    return {
      updateAge,
      data,
      updateMe,
      data2,
      hanyName: data2,
      name: data2,
      test1: toRefUser.hanyName,
      test2: toRefUser.name,
    };
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
