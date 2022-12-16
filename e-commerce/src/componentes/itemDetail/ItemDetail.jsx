import React from "react";

const ItemDetail = ({item})=>{

    return (
        <div className="row">

            <div className="col-md-4 offset-md-2">

                <img src={item.img} alt={item.name} />
                <h1> {item.name} </h1>
                <h3> {item.price} </h3>

            </div>
            

        </div>
    )
    
}



export default ItemDetail;