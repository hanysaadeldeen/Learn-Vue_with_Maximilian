<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }" @click="activate('poor')">
      <button type="button">Poor</button>
    </li>
    <li
      :class="{ active: modelValue === 'average' }"
      @click="activate('average')"
    >
      <button type="button">Average</button>
    </li>
    <li :class="{ active: modelValue === 'Great' }" @click="activate('Great')">
      <button type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },

  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   },
  // },

  methods: {
    activate(option) {
      // this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: rgb(251, 0, 255);
}
.active button {
  color: rgb(251, 0, 255);
}
ul {
  list-style: none;
  padding: 10px 0;
  margin: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
