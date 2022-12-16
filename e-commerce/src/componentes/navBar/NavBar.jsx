import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";


const navBar = () =>{
    return (

        <> 
            <div className="navTodo">

                <NavLink to={"category/DhaLeon"} className="logo">
                    <p> Dha Leon </p>
                </NavLink>

                <nav className="nav1">
                    <ul className="navL">
                        <li> <NavLink to={"category/MiCuenta"} className="page"> Mi Cuenta </NavLink></li>
                        <li> <NavLink to={"category/IniciarSesion"} className="page"> Iniciar Sesion </NavLink></li>
                        <li> <NavLink to={"category/Productos"} className="page"> Productos </NavLink></li>
                    </ul>
                </nav>

                <div className="divnav" id="carrito"> < CartWidget/> </div> 

            </div>
        
        </>

        )
    
}


export default navBar;