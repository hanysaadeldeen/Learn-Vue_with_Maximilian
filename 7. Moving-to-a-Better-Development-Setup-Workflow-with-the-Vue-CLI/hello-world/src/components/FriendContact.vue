<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "hide" : "show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong> Phone: </strong> {{ friend.phone }}</li>
      <li><strong> email: </strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 1,
        name: "mohamed",
        age: 12,
        phone: "1232344124",
        email: "email@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
