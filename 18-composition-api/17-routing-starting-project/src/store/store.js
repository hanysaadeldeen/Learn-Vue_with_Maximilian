import { createStore } from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const store = createStore({
  state() {
    return {
      count: 10,
    };
  },
  mutations,
  actions,
  getters,
});
export default store;
