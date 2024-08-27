<template>
  <form @submit="SubmitData">
    <input type="text" placeholder="name" v-model="nameInput" />
    <input type="tel" placeholder="age" v-model="ageInput" />
    <input type="number" placeholder="phone" v-model="phoneInput" />
    <input type="email" placeholder="email" v-model="emailInput" />
    <div>
      <label for="checkbox">checkbox</label>
      <input id="checkbox" type="checkbox" v-model="checkInput" />
    </div>
    <button type="submit">Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ["Getinputs-Data"],
  data() {
    return {
      nameInput: "",
      ageInput: "",
      phoneInput: "",
      emailInput: "",
      checkInput: "",
    };
  },
  methods: {
    SubmitData(e) {
      e.preventDefault();
      this.$emit("Getinputs-Data", {
        id: new Date().toISOString(),
        name: this.nameInput,
        age: this.ageInput,
        phone: this.phoneInput,
        email: this.emailInput,
        favorite: this.checkInput,
      });
    },
  },
};
</script>
