<template lang="">
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
  </div>

  <slot></slot>
  <p>{{ message }}</p>
</template>
<script>
import { computed, inject } from 'vue';
export default {
  emits: ['setAge'],
  props: ['firstName', 'lastName', 'age'],
  setup(props, context) {
    console.log(context);
    const message = inject('message');

    function setAge() {
      context.emit('setAge', 588);
    }
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
    return {
      userName,
      setAge,
      message,
    };
  },

  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   },
  // },
  // methods: {
  //   setAge() {
  //     this.$emit('setAge', 588);
  //   },
  // },
};
</script>
<style lang=""></style>
