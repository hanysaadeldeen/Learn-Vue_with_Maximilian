<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
    <p>{{ hello }}</p>
  </section>
</template>

<script>
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';
import useAlear from './hooks/alert';
export default {
  components: {
    UserAlert,
  },
  setup() {
    const alertTitle = ref('hany mohamed saad');
    const [alertIsVisible, showAlert, hideAlert, hello] = useAlear(alertTitle);
    return {
      alertIsVisible,
      showAlert,
      hideAlert,
      hello,
    };
  },
};
</script>
