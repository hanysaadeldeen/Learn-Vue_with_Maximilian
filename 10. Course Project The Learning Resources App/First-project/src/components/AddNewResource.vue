<template>
  <div class="BoxResorce">
    <form @submit.prevent="AddResource">
      <input type="text" placeholder="Title" v-model="title" />
      <input type="text" placeholder="Description" v-model="description" />
      <input type="text" placeholder="Link" v-model="link" />
      <button type="submit">Add Resource</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      link: "",
    };
  },
  methods: {
    AddResource() {
      this.$emit(
        "AddNewResourceToArray",
        this.title,
        this.description,
        this.link
      );
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
input {
  max-width: 100%;
  padding: 10px 15px;
  margin: 10px 0;
}
button {
  background: rgb(54, 19, 86);
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 15px;
  margin: 10px 0;
  cursor: pointer;
}
</style>
