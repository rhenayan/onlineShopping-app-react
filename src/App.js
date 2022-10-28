import 'react-toastify/dist/ReactToastify.css';
import { colors, fontWeight } from './styles/theme';
import Home from './pages/Home';
import Products from './pages/ProductGallery';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail/index';
import GlobalStyle from './styles/GlobalStyles.style';
import MainBox from './components/common/MainBox';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {ToastContainer} from 'react-toastify'

function App() {
  const theme = { ...colors, ...fontWeight };

  return (
    <>   
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ToastContainer/>
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
