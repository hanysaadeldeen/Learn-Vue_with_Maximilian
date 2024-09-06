export default {
  addProductToCart(state, payload) {
    const productData = payload;

    const productInCartIndex = state.cart.items.findIndex(
      (ci) => ci.productId === productData.id
    );

    if (productInCartIndex >= 0) {
      // Product already exists in the cart, increase quantity
      state.cart.items[productInCartIndex].qty++;
    } else {
      // Product not in cart, add as a new item
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1,
      };
      state.cart.items.push(newItem);
    }

    // Update total quantity and price
    state.cart.qty++;
    state.cart.total += productData.price;
  },

  removeProductFromCart(state, payload) {
    const prodId = payload;
    const productInCartIndex = state.cart.items.findIndex(
      (cartItem) => cartItem.productId === prodId
    );
    const prodData = state.cart.items[productInCartIndex];
    state.cart.items.splice(productInCartIndex, 1);
    state.cart.qty -= prodData.qty;
    state.cart.total -= prodData.price * prodData.qty;
  },
};
