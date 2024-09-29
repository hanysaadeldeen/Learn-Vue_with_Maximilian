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
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from 'vue';
export default {
  emits: ['setAge'],
  props: ['firstName', 'lastName', 'age'],
  setup(props, context) {
    const message = inject('message');

    function setAge() {
      context.emit('setAge', 588);
    }
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
    onBeforeMount(() => console.log('before mounted'));
    onMounted(() => console.log('mounted'));
    onBeforeUpdate(() => console.log('before update'));
    onUpdated(() => console.log('uptated'));

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
