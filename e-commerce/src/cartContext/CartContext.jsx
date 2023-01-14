import React, { useState,createContext } from 'react'

export const CartContext = createContext();




const CartContextProvider = ({ children }) => {
    
    const [cart , setCart] = useState([]);

    const isInCart = (productId) =>{
        return cart.some(x => x.productId === productId);
    }

    const addItem = (product , cantidad) => {
        if(isInCart(product.productId)) {
            let pos = cart.findIndex(x => x.productId === product.productId);
            cart[pos].cantidad += cantidad;
            setCart([...cart]);

        }else {
            setCart([...cart, {...product, cantidad:cantidad}])
        }
    } 


    const removeItem = (productId) => {
        const product = cart.filter(x => x.productId !==productId)
        setCart([...product]);

    }

    const clear = () =>{
        setCart([]);
    }

    const cartTotal = () =>{
        return cart.reduce((total , item) => total +=item.cantidad, 0 )
    }

    const sumaTotal = () =>{
        return cart.reduce((total , item) => total +=item.cantidad * item.price, 0 )
    }


    return (
        <CartContext.Provider value={{cart , addItem , removeItem, clear, cartTotal, sumaTotal}} >
            {children}
        </CartContext.Provider>


    )
} 

export default CartContextProvider;