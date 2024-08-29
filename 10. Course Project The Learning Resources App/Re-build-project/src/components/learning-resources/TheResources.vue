<template>
  <base-card>
    <base-button :mode="AllResources" @click="selectStoredResources"
      >Stored Resouces</base-button
    >
    <base-button :mode="AddResources" @click="selectAddResources"
      >Add Resouce</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTap"></component>
  </keep-alive>
</template>

<script>
import storedResources from "./StoredResource.vue";
import AddResource from "./AddResource.vue";
export default {
  data() {
    return {
      selectedTap: "storedResources",
    };
  },
  methods: {
    selectStoredResources() {
      this.selectedTap = "storedResources";
    },
    selectAddResources() {
      this.selectedTap = "AddResource";
    },
  },
  computed: {
    AllResources() {
      return this.selectedTap === "storedResources" ? "active" : "flat";
    },
    AddResources() {
      return this.selectedTap === "AddResource" ? "active" : "flat";
    },
  },

  components: {
    storedResources,
    AddResource,
  },
};
</script>
