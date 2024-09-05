import { createStore } from 'vuex';
import { counterModules } from './coutner/store';

const store = createStore({
  modules: {
    counter: counterModules,
  },
});

export default store;
