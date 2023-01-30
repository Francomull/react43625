import React from "react";
import { Link } from "react-router-dom";
import shoes from '../../images/1-AirJordanHighSatinSnake.jpg'
const item = ({item})=>{

    return(

        //contenido de la card
    <div className="cardTodo">
            <div className="card border border-0" style={{width: '18rem'}}>
                {/* <img src={item.img} className="card-img-top" alt={item.name} /> */}
                <div className="card-body" style={{border:'1px solid #000'}}>
                    <p className="card-text">{item.shoes}</p>
                    <p>{item.brand}</p>
                    <p>Precio : ${item.price}</p>
                    <img src={shoes} alt={shoes}  style={{width:'200px'}}/>
                </div>
            </div>
         <div>
            <Link to={'/item/' + item.id} className="button-efect ">Ver Detalles</Link>
         </div>
    </div>

    )
}



export default item;