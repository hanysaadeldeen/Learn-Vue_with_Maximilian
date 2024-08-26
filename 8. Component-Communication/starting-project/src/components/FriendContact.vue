<template>
  <li>
    <h2>{{ name }} {{ friendisFavorite ? "(favorite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "hide" : "show" }} Details
    </button>
    <button @click="toggleFavorite">Toogle</button>
    <ul v-if="detailsAreVisible">
      <li><strong> Phone: </strong> {{ phoneNumber }}</li>
      <li><strong> email: </strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["id", "name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
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
      this.friendisFavorite = !this.friendisFavorite;
    },
  },
};
</script>
