import React from "react";
import Item from '../item/Item.jsx'

const ItemList = ({items}) => {


    return(
        <div className="row">
            {
                items.map (item => <Item key={item.productId} item={item}/>)
            }
        </div>
    )
}




export default ItemList; 