import React from "react";
import CartWidget from "../cartWidget/CartWidget";


const navBar = () =>{
    return (

        <> 
            <div className="navTodo">

                <a href="#" className="logo">
                    <spam> Dha Leon </spam>
                </a>

                <nav className="nav1">
                    <ul className="navL">
                        <li> <a href="#"> Iniciar Sesion </a></li>
                        <li> <a href="#"> Mi Cuenta </a></li>
                        <li> <a href="#"> Productos </a></li>
                    </ul>
                </nav>

                <div class="divnav" id="carrito"> < CartWidget/> </div> 

            </div>
        
        </>

        )
    
}


export default navBar;