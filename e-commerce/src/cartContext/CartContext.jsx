import React, { useState, useContext} from 'react'
 const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext)




const CartContextProvider = ({ children }) => {
    
    const [cart , setCart] = useState([]);

    const isInCart = (id) => (cart.find((item) => item.id === id) ? true : false)


     // put product
  const addItem = (item, stock) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((item) => {
          return item.id === item.id
            ? { ...item, stock: item.stock + stock }
            : item;
        })
      );
    } else {
      setCart([...cart, { ...item, stock }]);
    }
  };


    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));

    }

    const clear = () => setCart([]);

    const cantidadItems = () =>{
        return cart.reduce((total , item) => (total += item.stock),0)
    }

    const sumaTotal = () =>{
        return cart.reduce((total , item) => (total += item.stock * item.price),0)
    }
    const eliminarXunidad = (id) =>
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return { ...item, stock: item.stock - 1 };
        } else {
          return item;
        }
      })
    );


    return (
        <CartContext.Provider value={{
            cart ,
             addItem 
             , removeItem
             , clear
             , cantidadItems
             , sumaTotal,
             eliminarXunidad}}
             >
            {children}
        </CartContext.Provider>


    )
} 

export default CartContextProvider;