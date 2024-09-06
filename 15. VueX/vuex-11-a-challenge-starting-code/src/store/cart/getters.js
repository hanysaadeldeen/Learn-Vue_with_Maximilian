export default {
  itemTotal(state) {
    return (state.cart.price * state.cart.qty).toFixed(2);
  },
};
