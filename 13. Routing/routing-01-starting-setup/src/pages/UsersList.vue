<template>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>

  <button @click="ChangeSaved">Change Saved</button>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';
export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    ChangeSaved() {
      this.changesSaved = true;
    },
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next) {
    // console.log('userList cmp beforeRouteEnter');
    // console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('Users List Cmp beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are You sure ? ');
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
