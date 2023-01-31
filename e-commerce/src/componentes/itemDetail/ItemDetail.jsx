import React, { useEffect, useState,useContext } from "react";
import ItemCount from '../itemCount/ItemCount'
import { useCartContext } from "../../cartContext/CartContext";

const ItemDetail = ({item})=>{

    const{ addItem } = useCartContext()
    // const [itemStock, setItemStock] = useState(0);


    const onAdd = (contador) => {
        addItem(item,contador);
  }


    return (


        //detalle de la card, una vez haces click en el producto se muestra esto 
<div className='my-5 p-5'>
        <div className='row'>
            <div className='col-md-4 offset-md-2 align-self-center' >
                {/* <img src={item.img} alt={item.name} className='img-fluid ' /> */}
            </div>  
            <div className='col-md-6' style={{display:'flex'}}>
                <h1> {item.shoes} </h1>
                <p><b>${item.price}</b></p>
                <img src={item.img} alt={item.img} style={{width:'220px'}}/>
                <div className='m-5'>
                    <ItemCount stock={item.stock} onAdd={onAdd} item={item}/>
                </div>
            </div>
        </div>
    </div>
    )
    
}



export default ItemDetail;