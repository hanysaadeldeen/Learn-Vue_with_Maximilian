<template lang="">
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>

  <div>
    <input type="text" placeholder="Add Name" v-model="NewUser" />
    <button @click="addUser">addUser</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      NewUser: '',

      users: ['max', 'hany', 'mohamed', 'september'],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.NewUser);
    },

    removeUser(userName) {
      this.users = this.users.filter((user) => user !== userName);
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;

  padding: 0;
}
ul li {
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px;
  margin: 1rem 0;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
