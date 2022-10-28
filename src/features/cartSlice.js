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
    addToCart(state, action) {
      const updatedCart = { ...action.payload, cartQuantity: 1 };
      state.cartItems.push(updatedCart);
      toast.success(`${action.payload.title} added to cart`, {
        position: 'top-right',
      });
    },
    removeFromCart(state, action) {
      const removedCartItem = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      );
      state.cartItems = removedCartItem;
      toast.error(`${action.payload.title} removed from cart`, {
        position: 'bottom-left',
      });
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload
      );

      state.cartItems[itemIndex].cartQuantity > 1 &&
        (state.cartItems[itemIndex].cartQuantity -= 1);
    },
    increaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload
      );

      state.cartItems[itemIndex].cartQuantity >= 1 &&
        (state.cartItems[itemIndex].cartQuantity += 1);
    },

    getTotals(state, action) {
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

    clearCart(state, action) {
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
