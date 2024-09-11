import { createStore } from 'vuex';
import coachsModules from './modules/coaches/index';
// import requestModules from './modules/requests/index';
const store = createStore({
  state() {
    return {};
  },
  modules: {
    coaches: coachsModules,
    // request: requestModules,
  },
});

export default store;
