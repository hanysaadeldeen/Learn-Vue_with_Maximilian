<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
    <p>{{ hello }}</p>
  </section>
</template>

<script>
import useAlear from './hooks/alert';
import UserAlert from './UserAlert.vue';
export default {
  components: {
    UserAlert,
  },
  setup() {
    const [alertIsVisible, showAlert, hideAlert, hello] = useAlear();
    return {
      alertIsVisible,
      showAlert,
      hideAlert,
      hello,
    };
  },
};
</script>
