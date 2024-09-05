<template>
  <base-container title="Vuex" v-if="isAuth">
    <section>
      <!-- first access to mutations methods -->
      <first-access></first-access>
      <!-- this triggre aloso increment mutations methods but using actions -->
      <change-counter></change-counter>
    </section>
  </base-container>
  <base-container title="Auth"> <user-auth></user-auth></base-container>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';
import FirstAccess from './components/FirstAccess.vue';
export default {
  components: {
    BaseContainer,
    UserAuth,
    ChangeCounter,
    FirstAccess,
  },
  computed: {
    GetData() {
      return this.$store.state.count;
    },

    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    ...mapGetters(['isLogin']),
  },
  data() {
    return {
      count: '',
    };
  },
  methods: {},
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
</style>
