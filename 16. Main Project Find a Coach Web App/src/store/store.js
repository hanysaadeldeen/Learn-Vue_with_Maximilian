import { createStore } from 'vuex';
import coachsModules from './modules/coaches/index';
// import requestModules from './modules/requests/index';
const store = createStore({
  state() {
    return {
      userId: 'c5',
    };
  },
  modules: {
    coaches: coachsModules,
    // request: requestModules,
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
