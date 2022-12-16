import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import arrayProductos from '../json/articulos.json'


const ItemDetailContainer = ()=>{
    const [item, setItem] = useState([]);
    const {productId} = useParams();

    
    useEffect(()=>{
        const promesa = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve (arrayProductos.find(item => item.productId === parseInt(productId)))
            }, 2000)
        });

        promesa.then((data)=>{
            setItem (data);
        }, [productId] )
        
    })
    return (
        <div className="container">       
            <ItemDetail item={item}/>
        </div>
    )
    
}



export default ItemDetailContainer