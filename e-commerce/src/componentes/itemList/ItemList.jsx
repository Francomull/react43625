import React from "react";
import Item from '../item/Item.jsx'

const ItemList = ({item}) => {


    return(
        <div className="row">
            {
                item.map (product => <Item key={product.productId} product={product}/>)
            }
        </div>
    )
}




export default ItemList; 