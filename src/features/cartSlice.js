import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, {payload}) {
      const updatedCart = { ...payload, cartQuantity: 1 };
      state.cartItems.push(updatedCart);
      toast.success(`${payload.title} added to cart`, {
        position: 'bottom-right',
      });
    },
    removeFromCart(state, {payload}) {
      const removedCartItem = state.cartItems.filter(
        cartItem => cartItem.id !== payload.id
      );
      state.cartItems = removedCartItem;
      toast.error(`${payload.title} removed from cart`, {
        position: 'bottom-left',
      });
    },
    decreaseQuantity(state, {payload}) {
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === payload
      );

      state.cartItems[itemIndex].cartQuantity > 1 &&
        (state.cartItems[itemIndex].cartQuantity -= 1);
    },
    increaseQuantity(state, {payload}) {
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === payload
      );

      state.cartItems[itemIndex].cartQuantity >= 1 &&
        (state.cartItems[itemIndex].cartQuantity += 1);
    },

    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    clearCart(state) {
      state.cartItems = [];
      toast.error('Cart cleared', {
        position: 'bottom-left',
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  getTotals,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
