<template>
  <div class="BoxResorce">
    <div>
      <div class="head">
        <h1>{{ title }}</h1>
        <Base-Button @click="DeleteResource(title)" type="button" mode="flat"
          >Delete</Base-Button
        >
      </div>
      <p>{{ description }}</p>
      <a :href="link" class="link" target="_blank">View Resource</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "description", "link"],
  data() {
    return {};
  },
  methods: {
    DeleteResource(value) {
      this.$emit("DelteResource", value);
    },
  },
};
</script>

<style>
.BoxResorce {
  -webkit-box-shadow: -1px 2px 22px 3px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: -1px 2px 22px 3px rgba(0, 0, 0, 0.09);
  box-shadow: -1px 2px 22px 3px rgba(0, 0, 0, 0.09);
  padding: 10px 20px;
  border-radius: 10px;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
p {
  margin-bottom: 15px;
}
.link {
  color: orange;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
