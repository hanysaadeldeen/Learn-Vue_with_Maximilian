<template lang="">
  <div>
    <div class="container">
      <h2>All Users</h2>
      <router-link to="courses">Courses</router-link>
    </div>
    <!-- box for style -->
    <div class="container">
      <user-list></user-list>
    </div>
    <div class="container">
      <div class="block" :class="{ animate: checkAnimate }"></div>
      <button @click="animateBlock">Animate</button>
    </div>

    <!-- transition events -->
    <div class="container">
      <!-- :css="false" -->
      <transition
        name="pare"
        @before-enter="beforeEnter"
        @before-leave="beforeLeave"
        @enter="enter"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
        @leave="leave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <p v-if="paraIsVisible">this si only sometimes visible..</p>
      </transition>
      <button @click="toogleParagraph">Animate</button>
    </div>

    <!-- buttons -->
    <div class="container" mode="out-in ">
      <transition name="fade-button">
        <button @click="toggleUsers(true)" v-if="!usersAreVisible">
          Show Users
        </button>
        <button @click="toggleUsers(false)" v-else>Hide Users</button>
      </transition>
    </div>

    <!-- for dialog -->
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog()">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog()">Show Dialog</button>
    </div>
  </div>
</template>
<script>
import userList from '../components/ListData.vue';
export default {
  components: {
    userList,
  },
};
</script>
<style lang=""></style>
