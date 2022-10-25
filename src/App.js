import Home from './pages/Home';
import Products from './pages/ProductGallery';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail/index';
import GlobalStyle from './styles/GlobalStyles.style';
import MainBox from './components/common/MainBox';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { colors, fontWeight } from './styles/theme';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApi } from './features/apiSlice';
import { store } from './features/store';

function App() {
  const theme = { ...colors, ...fontWeight };

  return (
    <>
      <Provider store={store}>
        <ApiProvider api={productsApi}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainBox>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='product/:id' element={<ProductDetail />} />
                <Route path='shoppingcart' element={<ShoppingCart />} />
              </Routes>
            </MainBox>
          </ThemeProvider>
        </ApiProvider>
      </Provider>
    </>
  );
}

export default App;
