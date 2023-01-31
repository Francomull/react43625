import CartContextProvider from "./cartContext/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import Error404 from "./componentes/error404/Error404";
import Footer from './componentes/footer/Footer';
import Checkout from './componentes/checkout/Checkout';
import BuyOrder from './componentes/buyOrder/BuyOrder';
import Cart from './componentes/cart/Cart'


function App() {

  return (

    <div className="App">

    <BrowserRouter>
        <CartContextProvider>
        <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:category' element={<ItemListContainer/>}/>
              <Route path='/productos' element={<ItemListContainer/>}/>
              <Route path='/item/:id' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/buyorder/:id' element={<BuyOrder/>}/>
              <Route path='*' element={<Error404/>}/>
            </Routes>
        </CartContextProvider>
        <Footer/>  
    </BrowserRouter>

  
 
  </div>
  );
}


export default App;
