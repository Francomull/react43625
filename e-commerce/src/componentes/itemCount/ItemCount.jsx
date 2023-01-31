import React, { useState } from "react";
import { Link } from "react-router-dom"


const ItemCount = ({ stock, onAdd }) => {

    const [contador, setContador] = useState(1)
    const [vendido, setVendido] = useState(false)

  
    const increanse = () => {
      setContador(contador + 1)
    }

    const decrement = () => {
      contador > 0 ? setContador(contador - 1) : setContador(0)
    }

    const agregarProduct = () => {
        onAdd(contador)
    }


    return (
        <>
            <div className="row text-center" >
                <div className="col" style={{display:'flex'}}>
                    <button className="btn btn-danger m-2" onClick={decrement}>-</button>
                    <button className="btn btn-primary m-2"> Cantidad : {contador}</button>
                    <button className="btn btn-success  m-2" onClick={increanse}>+</button>

                    
                </div>
               
            </div>
            <div className="row justify-content-center">
                {vendido ? <Link to={"/cart"} className="button-efect2 m-2">Finalizar compra</Link> :
                    <button className="button-efect2 m-2" onClick={agregarProduct}>Agregar al carrito</button>}
            </div>

        </>
    )
}

export default ItemCount