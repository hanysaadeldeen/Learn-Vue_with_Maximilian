<template>
  <li>
    <h2>{{ name }} {{ friendisFavorite === "1" ? "(favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "hide" : "show" }} Details
    </button>
    <button @click="toggleFavorite">Toogleeeeee</button>
    <ul v-if="detailsAreVisible">
      <li><strong> Phone: </strong> {{ phoneNumber }}</li>
      <li><strong> email: </strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friendisFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendisFavorite === "1") {
        this.friendisFavorite = "0";
      } else {
        this.friendisFavorite = "1";
      }
    },
  },
};
</script>
