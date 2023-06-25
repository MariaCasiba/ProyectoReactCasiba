import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === item.id)
            cart[pos].quantity += quantity;
            setCart([...cart]);

        } else {
            setCart([...cart, {...item, quantity:quantity}])
        }
    };

    const removeItem = (id) => {
        const items = cart.filter(product => product.id !== id);
        setCart([...items]);
    }

    const clear = () => {
        setCart([]);
    } 

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    };

    const cartTotalProductos = () => {
        return cart.reduce((acum, item) => acum += item.quantity, 0);
    }

    const sumaTotalProductos = () => {
        return cart.reduce((acum, item) => acum += item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotalProductos, sumaTotalProductos}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;