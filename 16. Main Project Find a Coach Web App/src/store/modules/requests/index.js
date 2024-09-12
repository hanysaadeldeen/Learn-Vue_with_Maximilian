import { actions } from './actions';
import { mutations } from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      requestsList: [],
    };
  },

  actions: actions,
  mutations: mutations,
  getters: getters,
};
