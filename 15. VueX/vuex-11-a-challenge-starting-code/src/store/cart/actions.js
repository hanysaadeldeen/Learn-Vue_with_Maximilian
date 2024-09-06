export default {
  addProductToCart({ commit, rootState }, payload) {
    const productId = payload.id;
    const products = rootState.product;

    const productData = products.products.find((prod) => prod.id === productId);

    commit('addProductToCart', productData);
  },
  removeProductFromCart({ commit }, prodId) {
    commit('removeProductFromCart', prodId);
  },
};
