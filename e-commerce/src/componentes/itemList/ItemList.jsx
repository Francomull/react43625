import React from "react";
import Item from '../item/Item.jsx'

const ItemList = ({item}) => {


    return(
        <div className="row">
            {
                item.map((item => (
                <Item key={item.id} item={item}/>)
            ))}
        </div>
    )
}




export default ItemList; 