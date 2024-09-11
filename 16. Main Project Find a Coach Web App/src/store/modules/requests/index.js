import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export default {
  namespaced: true,
  state() {
    return {};
  },

  actions: actions,
  mutations: mutations,
  getters: getters,
};
