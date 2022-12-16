import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import Error404 from "./componentes/error404/Error404";





function App() {
  return (

      <BrowserRouter className="App">

              <NavBar/>

              <Routes>

                <Route path={"/"} element= {<ItemListContainer/>}/>
                <Route path={"/item/:productId"} element= {<ItemDetailContainer/>}/>
                <Route path={"/category/:productId"} element= {<ItemListContainer/>}/>
                <Route path={"*"} element= {<Error404/>}/>

              </Routes> 

      </BrowserRouter>
          

  );
}


export default App;
