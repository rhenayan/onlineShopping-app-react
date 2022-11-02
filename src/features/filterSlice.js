import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredProducts: [],
  activeCategory: 'All',
  sortSelectedValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilteredProducts(state, action) {
      const products = action.payload;
      const filteredResult = products?.filter(
        product => product.category === state.activeCategory
      );

      state.activeCategory === 'All'
        ? (state.filteredProducts = products)
        : (state.filteredProducts = filteredResult);
    },

    getActiveCategory(state, action) {
      state.activeCategory = action.payload;

    },

    getActiveSort(state, action) {
      state.sortSelectedValue = action.payload;
    },

    sortFilteredProducts(state, action) {
      const products = action.payload;
      const filtered = products?.filter(
        product => product.category === state.activeCategory
      );

      const filteredResult = state.activeCategory === 'All' ? products : filtered

      const highest = filteredResult?.slice().sort((a, b) => b.price - a.price);

      const lowest = filteredResult?.slice().sort((a, b) => a.price - b.price);

      state.sortSelectedValue === 'Highest' && (state.filteredProducts = highest);

      state.sortSelectedValue === 'Lowest' && (state.filteredProducts = lowest);

    },
  },
});

export const {
  getFilteredProducts,
  getActiveCategory,
  getActiveSort,
  sortFilteredProducts,
} = filterSlice.actions;
export default filterSlice.reducer;
