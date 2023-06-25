import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext'
import Header from './components/Header';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import SaludoFinal from './components/SaludoFinal';

function App() {
  return (
    <div className='container-fluid bg-secundario'>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:id"} element={<ItemListContainer />}  />
              <Route path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/checkout"} element={<Checkout />} />
              <Route path={"/saludofinal/:orderId"} element={<SaludoFinal />} />
              <Route path={"/*"} element={<Error404 />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
