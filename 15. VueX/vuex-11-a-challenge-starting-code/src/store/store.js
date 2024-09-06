import { createStore } from 'vuex';
import ProductsStore from './produts/store';

const store = createStore({
  modules: {
    product: ProductsStore,
  },
  state() {
    return {
      isLoggedIn: false,
      login: false,
      logout: true,
    };
  },
  mutations: {
    login(state) {
      console.log('yes');

      state.login = true;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.login = false;
      state.isLoggedIn = false;
    },
  },
});

export default store;
