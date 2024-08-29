<template>
  <BoxResorce
    v-for="Resorce in Resorces"
    @DelteResource="DelteResource"
    :key="Resorce.id"
    :title="Resorce.title"
    :description="Resorce.description"
    :link="Resorce.link"
  ></BoxResorce>
</template>

<script>
import BoxResorce from "./BoxResorce.vue";

export default {
  data() {},
  props: ["Resorces"],

  components: {
    BoxResorce,
  },
};
</script>
