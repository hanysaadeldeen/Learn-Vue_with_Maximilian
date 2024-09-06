import { createStore } from 'vuex';
import ProductsStore from './produts/store';
import cartStore from './cart/store';

const store = createStore({
  modules: {
    product: ProductsStore,
    cart: cartStore,
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
