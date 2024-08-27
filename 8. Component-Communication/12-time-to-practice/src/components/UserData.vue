<template>
  <form @submit.prevent="GetUserDataInput">
    <input type="text" placeholder="Your Name" v-model="userName" />
    <input type="number" placeholder="Your Age" v-model="userAge" />
    <button type="submit">Submit Data</button>
  </form>
</template>

<script>
export default {
  emits: ["UserData-input"],
  data() {
    return {
      userName: "",
      userAge: "",
    };
  },
  methods: {
    GetUserDataInput() {
      this.$emit("UserData-input", this.userName, this.userAge);
    },
  },
};
</script>

<style>
input {
  font: inherit;

  padding: 0.15rem;
}
form {
  max-width: 300px;
  text-align: center;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
button {
  background: rgb(137, 0, 0);
  color: white;
  padding: 10px 15px;
  border: 1px solid #ddd;
  cursor: pointer;
}
</style>
