import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from './context/CartContext';
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { Navigate } from 'react-router-dom';

     const Checkout = () => {
    
    const [nombre, setNombre] = useState("");
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear, sumaTotalProductos} = useContext(CartContext);


    const realizarPedido = () => {
   
        if(nombre.length === 0){
            return false;
        }
        if(email1.length === 0 ){
            return false;
        }
        if(email2.length === 0){
            return false;
        }
        if(email1 !== email2){
            return false;
        }
        if(telefono.length === 0 ){
            return false;
        }

        const buyer = {name:nombre, phone:telefono, email:email1};
        const items = cart.map(item => ({id:item.id, title:item.titulo, price:item.precio, quantity:item.quantity}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumaTotalProductos();
        const order = {buyer:buyer, items:items, date:date, total:total}

        const db = getFirestore();
        const OrderCollection = collection(db, "pedidos");
        addDoc(OrderCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        }) 
        .catch(resultado => {
            console.log("Error! No se pudo completar el pedido");
        })
    }

    

  return (
    <div className='container'>
        <div className='row'>
            <div className='col col-md-3 g-2 offset-md-2'>
                <form> 
                    <h3 className='mt-3'>Completa tus datos personales</h3>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                        <input type="text" className="form-control" id="nombre" autoComplete="given-name" onInput={(e) => {setNombre(e.target.value)}} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email1" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email1" autoComplete='email' onInput={(e) => {setEmail1(e.target.value)}} aria-describedby="emailHelp" placeholder='nombre@ejemplo.com' required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email2" className="form-label">Repetir Email:</label>
                        <input type="email" className="form-control" id="email2" autoComplete='email' onInput={(e) => {setEmail2(e.target.value)}} aria-describedby="emailHelp" placeholder='nombre@ejemplo.com' required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="telefono" autoComplete="tel" onInput={(e) => {setTelefono(e.target.value)}} required />
                    </div>
                    <button type="button" className="btn btn-dark" onClick={realizarPedido}>Realizar pedido</button>
                </form>
            </div>
            <div className='col-md-5 offset-md-1 mt-4 table-responsive'>
                <table className="table bg-terciario table-borderless align-middle">
                    <thead>
                    <tr className='text-center fs-5'>
                        <th scope="col">Producto</th>
                        <th scope="col">Título</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart.map(item => (
                        
                        <tr className='text-center' key={item.id}>
                            <td><img src={item.picture} alt={item.titulo} width={80}/></td>
                            <td>{item.titulo}</td>
                            <td>{item.autor}</td>
                            <td>{item.quantity}</td>
                            <td>${item.precio}</td>
                        </tr>
                        ))
                    }
                    <tr className='table-light fw-bold'>
                        <td colSpan={4}>TOTAL A PAGAR:</td>
                        <td>${sumaTotalProductos()}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                {orderId ? <Navigate to={"/saludofinal/" + orderId} /> : ""}
            </div>    
        </div>
    </div>
  )
}


export default Checkout 

