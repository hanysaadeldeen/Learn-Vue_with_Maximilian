import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.value;
    },
    TestActionWithMutations(state) {
      state.count += 800;
    },
  },
  getters: {
    IncreaseWithFixed(state) {
      return state.count + 10;
    },
    IncreaseWithDifference(state) {
      return state.count + 20;
    },
    GetArgument: (state) => (value) => {
      return state.count + value;
    },
  },
  actions: {
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
  },
});

export default store;
