import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Error404 from './components/Error404';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='container-fluid bg-secundario'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />}  />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/*"} element={<Error404 />} />
          </Route>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
