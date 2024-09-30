import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import AllProducts from './pages/AllProducts.vue';
import ProductDetails from './pages/ProductDetails.vue';
import AddProduct from './pages/AddProduct.vue';
import App from './App.vue';
import MainCounter from './pages/MainCounter.vue';
import store from './store/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: AllProducts },
    { path: '/products/:id', component: ProductDetails, props: true },
    { path: '/products/add', component: AddProduct },
    { path: '/counter', component: MainCounter },
  ],
});

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');
