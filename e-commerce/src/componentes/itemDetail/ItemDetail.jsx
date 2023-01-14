import React, { useEffect, useState,useContext } from "react";
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from "../../cartContext/CartContext";

const ItemDetail = ({item})=>{

    const{addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);


    const onAdd = (cantidad) => {
        setItemStock(itemStock - cantidad)
        addItem(item,cantidad);
  }

    useEffect(() =>{
        setItemStock(item.stock)

  },[item])

    return (


        //detalle de la card, una vez haces click en el producto se muestra esto 
<div className='my-5 p-5'>
        <div className='row'>
            <div className='col-md-4 offset-md-2 align-self-center' >
                <img src={item.img} alt={item.name} className='img-fluid ' />
            </div>  

            <div className='col-md-6'>
                <h1> {item.name} </h1>
                <p><b>${item.price}</b></p>

                <div className='m-5'>
                    <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                </div>

            </div>
            
        </div>
    </div>
    )
    
}



export default ItemDetail;