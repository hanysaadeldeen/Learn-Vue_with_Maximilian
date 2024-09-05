<template lang="">
  <div>
    <button v-if="!userIsAuthenticated" @click="updateLogin">Login</button>
    <button v-else @click="updateLogin">LogOut</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    // isAuth() {
    //   return this.$store.getters.userIsAuthenticated;
    // },
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    ...mapActions(['updateLogin']),
  },
};
</script>
<style scoped>
div {
  display: flex;
  align-items: center;
  gap: 20px;
}
button {
  background: #000;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
