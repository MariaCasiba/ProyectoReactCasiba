import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos al e-commerce de El Borde'} />
    </div>
  );
}

export default App;
