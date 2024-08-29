<template>
  <Appheader title="RemeberMe"></Appheader>
  <section>
    <Control-Resorce @GetActivePage="GetActivePage"></Control-Resorce>
    <!-- <component :is="visibleResource"></component>-->

    <component
      :is="visibleResource"
      v-if="visibleResource === 'New-Resource'"
      @AddNewResourceToArray="AddNewResourceToArray"
    ></component>

    <component
      :is="visibleResource"
      v-if="visibleResource === 'Resources-list'"
      :Resorces="Resorces"
      @DelteResource="DelteResource"
    ></component>
  </section>
</template>

<script>
import Appheader from "./components/AppHeader.vue";
export default {
  data() {
    return {
      Resorces: [
        {
          id: "Official-Guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org",
        },
        {
          id: "Google-Guide",
          title: "Google Guide",
          description: "The official Google documentation. website",
          link: "https://www.google.com/",
        },
      ],
      controller: ["Control source", " Add source"],
      visibleResource: "Resources-list",
    };
  },
  methods: {
    GetActivePage(value) {
      this.visibleResource = value;
      console.log(this.visibleResource);
    },
    AddNewResourceToArray(title, description, link) {
      this.Resorces.unshift({
        id: title,
        title,
        description,
        link,
      });
    },
    DelteResource(value) {
      this.Resorces = this.Resorces.filter(
        (Resource) => Resource.title !== value
      );
    },
  },
  components: {
    Appheader,
  },
};
</script>
<style>
html,
body,
* {
  margin: 0;
  padding: 0;
}
section {
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
