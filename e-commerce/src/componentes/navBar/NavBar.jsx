import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";


const navBar = () =>{
    return (

        <> 
            <div className="navTodo">

                <div >
                <NavLink to={'/'} className="logoNav"  ><img src={"https://i.pinimg.com/564x/aa/4e/e6/aa4ee697716a302e6be1da13b4e95137.jpg"} alt="logo" width={90}></img>
                    <p> Dha Leon </p>
                </NavLink>
                </div>

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