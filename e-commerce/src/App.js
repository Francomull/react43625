import './App.css';
import NavBar from './componentes/navBar/NavBar';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import cartWidget from './componentes/cartWidget/CartWidget';




function App() {
  return (

      <div className="App">

          <NavBar/>
          <ItemListContainer greeting={"Bienvenidos a Dha-Leon"}/>
          <ItemListContainer prop= "¡QUE DISFRUTEN!" />

      </div>

  );
}


export default App;
