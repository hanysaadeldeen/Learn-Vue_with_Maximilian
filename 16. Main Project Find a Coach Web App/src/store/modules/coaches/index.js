import { actions } from './actions';
import { mutations } from './mutations';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      lastfetch: null,
      coachesList: [],
      count: 1,
    };
  },

  actions,
  mutations,
  getters,
};
