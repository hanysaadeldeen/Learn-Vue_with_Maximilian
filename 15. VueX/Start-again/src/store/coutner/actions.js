export default {
  increase({ commit }, GetValue) {
    commit('increment', {
      value: GetValue,
    });
  },
  PromiseActions({ commit }) {
    setTimeout(() => {
      commit('TestActionWithMutations');
    }, 2000);
  },
};
