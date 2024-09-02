<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Route t2</router-link>
  </section>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['teams', 'users'],
  props: ['id'],
  data() {
    return {
      memberId: '',
      teamName: '',
    };
  },

  methods: {
    updateContentPage(TeamId) {
      this.memberId = TeamId;
      this.teamName = this.teams.find((team) => team.id === this.memberId).name;
      const members = this.teams.find(
        (team) => team.id === this.memberId
      ).members;
      this.members = this.users.filter((user) => members.includes(user.id));
    },
  },
  watch: {
    id(newOne) {
      this.updateContentPage(newOne);
    },
  },
  created() {
    this.updateContentPage(this.id);
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
