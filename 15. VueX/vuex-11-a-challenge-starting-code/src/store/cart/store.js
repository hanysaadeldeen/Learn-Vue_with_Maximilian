import ControlProduct from './mutations';
import ActionProduct from './actions';
import getters from './getters';
export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: ControlProduct,

  actions: ActionProduct,

  getters: getters,
};
