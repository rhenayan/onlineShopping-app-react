import Home from './pages/Home';
import Products from './pages/ProductGallery';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail/index';
import GlobalStyle from './styles/GlobalStyles.style';
import MainBox from './components/common/MainBox';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {bgColor, colors, fontWeight} from './styles/theme'

function App() {
  const theme = { ...colors, ...fontWeight };

  console.log(theme)
  return (
    <>
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
    </>
  );
}

export default App;
