import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"
import { BsFillTrash3Fill } from "react-icons/bs"

const Cart = () => {
  const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext)

  if( cart.length === 0 ){
    return(
      <div className="empty-cart">
        <div className="empty-cart-div">
          <h2 className="title-empty-cart">No hay productos en el carrito.</h2>
          <Link to="/" className="button-home-empty-cart" >Volver al inicio</Link>
        </div>
        <img src="./public/svg/empty.svg" alt="" width={400} />
      </div>
    )
  }

  return (
    <div className="cart" >
      <h1 className="title-cart">Productos en el carrito</h1>
      {
        cart.map( (productCart) => (
          <div className="item-cart" key={productCart.id}>
            <img className="img-item-cart" src={productCart.imagen} width={100} alt="" />
            <p className="text-item-cart">{productCart.nombre}</p>
            <p className="text-item-cart">precio c/u: ${productCart.precio}</p>
            <p className="text-item-cart">cantidad: {productCart.quantity}</p>
            <p className="text-item-cart">precio parcial: ${ productCart.precio * productCart.quantity } </p>
            <button className="delete-item-cart" onClick={ () => deleteProductInCart(productCart.id) } >
              <BsFillTrash3Fill />
            </button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrice()}</p>
        <Link className="finish-buy" to="/checkout" >Continuar con mi compra</Link>
        <button className="delete-cart" onClick={deleteCart} >Vaciar carrito</button>
      </div>
    </div>
  )
}
export default Cart