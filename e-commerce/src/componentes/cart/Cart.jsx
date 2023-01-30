
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
                <h2>Tu carrito Está Vacio</h2>
                </div> :
                <div className='map'>
        {
        cart.map((item , index) =>
        <div className='detail' key={index}>
        <div className='container-cart'>
        <div className='description'>
        <h3 className='name'>{item.shoes}</h3>
        <p className='precio'>Precio: {item.price} x Unidad</p>
        <p className='cantidad'>Cantidad : {item.stock}</p>
        <div className='buttons'>
        <button className='decrease' disabled={item.stock <= 0 && removeItem(item.id)} onClick={() => eliminarXunidad(item.id)}> - </button>
        <button onClick={() => removeItem(item.id)} className="button-cart">Eliminar Todo</button>
        </div>
        </div>
        </div>
        </div>
        )}
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