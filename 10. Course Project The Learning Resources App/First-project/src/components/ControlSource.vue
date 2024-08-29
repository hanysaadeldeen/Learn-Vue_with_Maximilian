<template>
  <div class="BoxResorce">
    <div class="head">
      <Base-Button
        :class="this.activeResorce === 'Resources-list' ? 'active' : ''"
        @click="getActivePage('Resources-list')"
      >
        Control source
      </Base-Button>
      <Base-Button
        :mode="this.activeResorce === 'New-Resource' ? 'active' : ''"
        @click="getActivePage('New-Resource')"
      >
        Add source
      </Base-Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeResorce: "Resources-list",
    };
  },
  methods: {
    getActivePage(value) {
      this.activeResorce = value;
      this.$emit("GetActivePage", this.activeResorce);
    },
  },
};
</script>

<style>
/* .source {
  color: rgb(54, 19, 86);
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 19px;
}

.source.active {
  background: rgb(54, 19, 86);
  color: white;
} */
</style>
