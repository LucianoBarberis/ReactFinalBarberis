import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./itemdetail.css"

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  return (
    <div className="item-detail">
      <div className="images-detail-container">
        <div className="main-image">
        <img src={product.imagen} className="img-item" alt="" height={500} width={1700} />
        </div>
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.nombre}</h2>
        <p className="text-detail">{product.descripcion}</p>
        <p className="text-detail">Precio: ${product.precio}</p>
        {
          hideItemCount === true ? (
            <>
              <Link to="/" className="button-detail">Volver al inicio</Link>
              <Link to="/cart" className="button-detail">Terminar mi compra</Link>
            </>
          ) : (
            <ItemCount stock={product.stock} addProduct={addProduct} />
          )
        }
      </div>
    </div>
  )
}
export default ItemDetail