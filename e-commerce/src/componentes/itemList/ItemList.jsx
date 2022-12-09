import React from "react";
import Item from '../item/item.jsx'

const ItemList = ({Items}) => {


    return(
      <div>
        {
            Items.map (Item => <Item key={Item.id}   item={Item}/>)
        }
        </div>
    )
}




export default ItemList; 