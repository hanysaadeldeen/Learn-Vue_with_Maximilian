<template>
  <h1>hello task</h1>
  <user-data @UserData-input="GetDataInput"></user-data>
  <active-user :name="this.dataUserName" :age="this.dataUserAge"></active-user>
</template>

<script>
export default {
  data() {
    return {
      dataUserName: "",
      dataUserAge: 0,
    };
  },
  methods: {
    GetDataInput(name, age) {
      (this.dataUserName = name), (this.dataUserAge = +age);
    },
  },
};
</script>
<style>
h1 {
  text-align: center;
}
template {
  text-align: center;
}
</style>
