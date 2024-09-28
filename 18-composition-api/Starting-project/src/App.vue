<template>
  <section class="container">
    <h2>
      {{ computedWithModel }}
    </h2>
    <input type="text" v-model="yourName" placeholder="User Name" />
    <input type="number" v-model="yourAge" placeholder="User Age" />
  </section>
  <section class="container">
    <h1>{{ computedName }}</h1>
    <div>
      <input type="text" @input="setFirstName" placeholder="First name" />
      <input type="text " @input="setLastName" placeholder="last name" />
    </div>
  </section>
</template>

<script>
import { computed, ref, watch } from 'vue';

export default {
  setup() {
    const yourAge = ref('');
    let yourName = ref('');

    const computedWithModel = computed(function () {
      return yourName.value + ' ' + yourAge.value;
    });

    const firstName = ref('');
    const lastName = ref('');

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
      // yourName.value = 'hello there';
    }

    const computedName = computed(function () {
      return firstName.value + '' + lastName.value;
    });

    watch([firstName, yourName], function (newValue, oldValue) {
      console.log('old First Name ', oldValue[0]);
      console.log('new First Name ', newValue[1]);
    });
    // watch(firstName, function (newValue, oldValue) {
    //   console.log('old First Name ', oldValue);
    //   console.log('new First Name ', newValue);
    // });

    return {
      yourAge,
      yourName,
      computedWithModel,
      setFirstName,
      setLastName,
      firstName,
      lastName,
      computedName,
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
