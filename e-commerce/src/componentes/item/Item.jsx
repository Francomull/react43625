import React from "react";
import { Link } from "react-router-dom";

const item = ({item})=>{

    return(

        //contenido de la card


    <div className="cardTodo">

        <Link to={`/item/${item.productId}`}>

            <div className="card border border-0" style={{width: '18rem'}}>

                <img src={item.img} className="card-img-top" alt={item.name} />

                <div className="card-body">

                    <p className="card-text">{item.name}</p>

                </div>

                
            </div>

         </Link>

         <div>
            <Link to={'/item/' + item.productId} className="button-efect ">Ver Detalles</Link>
         </div>

    </div>

    )
}



export default item;