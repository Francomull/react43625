import React, { useState, useEffect } from "react";
import arrayProductos from '../json/articulos.json'
import ItemList from '../itemList/ItemList.jsx'



const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    
    useEffect(()=>{
        const promesa = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve (arrayProductos)
            }, 2000)
        });

        promesa.then((data)=>{
            setItems (data);
        })
        
    })



    return (

        <div className='s1'>
            <div className='s3'>
                    <ItemList items={items} /> 
            </div>
        </div>

        

    )
}

export default ItemListContainer;