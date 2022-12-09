import React from "react";
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import cartWidget from './componentes/cartWidget/CartWidget';
import home from './componentes/routes/Home/home';





function App() {
  return (

      <div className="App">

          <NavBar/>
          <ItemListContainer greeting={"Bienvenidos a Dha-Leon"}/>
         

      </div>

  );
}


export default App;
