<template>
  <TheHeader title="ReminderMe"></TheHeader>

  <theResources></theResources>
</template>
<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import theResources from "./components/learning-resources/TheResources.vue";
export default {
  data() {
    return {
      AllResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
    };
  },
  provide() {
    return {
      AllResources: this.AllResources,
      addNewresource: this.addresource.bind(this),
      deleteResource: this.deleteResource.bind(this),
    };
  },

  methods: {
    addresource(title, description, link) {
      this.AllResources.unshift({
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      });
    },
    deleteResource(id) {
      const index = this.AllResources.findIndex((res) => res.id === id);
      this.AllResources.splice(index, 1);
    },
  },

  components: {
    TheHeader,
    theResources,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
