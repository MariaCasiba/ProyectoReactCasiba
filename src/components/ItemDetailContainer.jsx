import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import productos from "../productos.json";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const {id} = useParams();

    
  useEffect(() => {

    const promesa = new Promise((resolve) => {

      setTimeout(() => {
        resolve(productos.find(item => item.id === parseInt(id)));
      }, 2000);
    });

    promesa.then(data => {
      setItem(data);
    });
  }, [id]);

  return (
    <div>
      <ItemDetail producto={item} />
    </div>
  )
}

export default ItemDetailContainer