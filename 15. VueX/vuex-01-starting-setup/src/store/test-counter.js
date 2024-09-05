import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      isLogin: false,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increase(state, payload) {
      state.count += payload.value;
    },
    updateLogin(state) {
      state.isLogin = !state.isLogin;
    },
    updateCount(state, newCount) {
      state.count = newCount;
    },
  },
  getters: {
    Addtwohundred: (state) => (amount) => {
      return state.count + amount;
    },

    userIsAuthenticated(state) {
      return state.isLogin;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 2000);
    },
    increase({ commit }, payload) {
      commit('increase', payload);
    },
    updateLogin({ commit }) {
      commit('updateLogin');
    },
  },
});
export default store;
