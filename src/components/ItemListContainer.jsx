import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import productos from '../productos.json'
import ItemList from './ItemList';

const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id? productos.filter(item => item.categoria === id) : productos)
      }, 2000);
    });

    promesa.then(data => {
      setItems(data)
    })
    promesa.catch(error => {
      console.error(error)
    })
  }, [id]);


  return (
    <div className='container-fluid'>
      <div className='row'> 
        <div className='col text-center p-3'>
          <ItemList items={items} />   
        </div>
        
      </div>
    </div>   
  )
}

export default ItemListContainer