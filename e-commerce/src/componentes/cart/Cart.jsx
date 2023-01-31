
import { Link } from 'react-router-dom';
import { useCartContext } from '../../cartContext/CartContext';

const Cart = () => {

    const { cart, removeItem, clear, sumaTotal, eliminarXunidad } = useCartContext();


    return (
        <>
        <div className='cart2'>
          {
            cart.length === 0 ? 
            <div className='vacio'>
              <h2>El carrito esta vacio</h2>
            </div>
            :
            <div className='cart-map'>
              {
                cart.map((item, indice) => 
                <div className='detail-cont' key={indice}>
                  <div className='cardCarrito'>
                    <div className='descriptionArticle'>
                      <h3 className='name-cart'>{item.brand}</h3>
                      <img src={item.img} alt={item.img}  className='img-cart' style={{width:'220px'}}/>
                      <p>Precio : ${item.price}</p>
                      <p>Cantidad : {item.stock}</p>
                      <div className='content-button'>
                      <button className='decrease' disabled={item.stock <= 0 && removeItem(item.id)} onClick={() => eliminarXunidad(item.id)}> - </button>
                        <button className='button-eliminar' onClick={()=>removeItem(item.id)}>Eliminar Todo</button>
                        <p>{sumaTotal()}</p>
                        <p onClick={clear}>Vaciar Carrito</p>
                      </div>
                    </div>
                  </div>
                </div>
                )
              }
            </div>
          }
        </div>
        <div className='cont-vacio'>
        <p className='precio-cart-24'>Total: ${sumaTotal()}</p>
        <Link to ='/checkout'>Terminar compra</Link>
        <button onClick={() => clear()}>Vaciar Carrito</button>
        </div>
        </>
    )
}

export default Cart;