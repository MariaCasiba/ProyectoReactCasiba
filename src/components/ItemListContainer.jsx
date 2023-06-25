import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {collection, getFirestore, getDocs, query, where} from "firebase/firestore";
import Loading from './Loading';
import ItemList from './ItemList';

const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection(db, "items");
  const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
  getDocs(q).then(resultado => {
    if (resultado.size > 0) {
        setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));  
        setLoading(false);
    } else{
      console.error("Error! No se encontraron productos en la coleccion!")
    }
  });
  
}, [id]);


  return (
    <div className='container-fluid'>
      <div className='row'> 
        <div className='col text-center p-2'>
         {loading ? <Loading /> : <ItemList items={items} /> }   
          <div className='col-md-4'>
              <img src={items.picture} alt={items.titulo} className="img-fluid" />
          </div>
          <div className='col-md-4'>
              <h2>{items.titulo}</h2>
              <p>{items.precio}</p>
          </div>
        </div>
        
      </div>
    </div>   
  )
}


export default ItemListContainer