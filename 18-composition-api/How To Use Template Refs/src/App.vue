<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <main-user
      :first-Name="firstName"
      :last-Name="lastName"
      :age="age"
      @setAge="setAge"
    >
      <h2>content of slot</h2>
    </main-user>

    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import mainUser from './components/mainUser';
export default {
  components: {
    mainUser,
  },
  setup() {
    // const uName = ref('Maximilian');
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    const uAge = ref(31);

    provide('message', uAge);
    // provide: {
    // home:"mohamed"
    // },
    // const user = reactive({
    //   name: 'Maximilian',
    //   age: 31,
    // });

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName, lastName], function (newValues, oldValues) {
      console.log('Old age: ' + oldValues[0]);
      console.log('New age: ' + newValues[0]);
      console.log('Old name: ' + oldValues[1]);
      console.log('New name: ' + newValues[1]);
    });

    function setNewAge(value) {
      uAge.value = value;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastNameInput,
      lastName,
      setLastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // },
  // watch: {
  //   age(val) {
  //     console.log(val);
  //   }
  // }
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
