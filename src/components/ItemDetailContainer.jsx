import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const producto = doc(db, "items", id);
    getDoc(producto).then(resultado => {
      setItem({id:resultado.id, ...resultado.data()})
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {loading ? <Loading /> : <ItemDetail producto={item} />}
    </div>
  )
}

export default ItemDetailContainer