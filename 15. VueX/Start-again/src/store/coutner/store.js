import counterMutaion from './mutations';
import counterGetters from './getters';
import counterActions from './actions';
export const counterModules = {
  namespaced: true,
  state() {
    return {
      count: 12,
    };
  },
  mutations: counterMutaion,
  getters: counterGetters,
  actions: counterActions,
};
