export default {
  increment(state, payload) {
    state.count += payload.value;
  },
  TestActionWithMutations(state) {
    state.count += 800;
  },
};
