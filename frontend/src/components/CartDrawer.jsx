import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import "../styles/CartDrawer.css";

function CartDrawer({ abierto, cerrar }) {

  const {
    cart,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    total
  } = useCart();

  return (

    <div className={abierto ? "drawer-overlay active" : "drawer-overlay"} onClick={cerrar}>

      <div
        className={abierto ? "cart-drawer open" : "cart-drawer"}
        onClick={(e)=>e.stopPropagation()}
      >

        <div className="drawer-header">

          <h2>Mi carrito</h2>

          <button onClick={cerrar}>
            <X size={22}/>
          </button>

        </div>

        {

          cart.length===0?

          <div className="empty-cart">

            <h3>Tu carrito está vacío</h3>

            <p>Agregá perfumes para comenzar.</p>

          </div>

          :

          <>

          <div className="drawer-products">

          {

          cart.map(item=>(

          <div className="drawer-item" key={item.id}>

          <img
          src={item.imagen}
          alt={item.nombre}
          />

          <div className="drawer-info">

          <h4>{item.nombre}</h4>

          <span>{item.marca}</span>

          <strong>${item.precio}</strong>

          <div className="cantidad">

          <button onClick={()=>disminuirCantidad(item.id)}>

          <Minus size={15}/>

          </button>

          <span>{item.cantidad}</span>

          <button onClick={()=>aumentarCantidad(item.id)}>

          <Plus size={15}/>

          </button>

          </div>

          </div>

          <button
          className="delete-btn"
          onClick={()=>eliminarProducto(item.id)}
          >

          <Trash2 size={18}/>

          </button>

          </div>

          ))

          }

          </div>

          <div className="drawer-footer">

          <div className="total-row">

          <span>Total</span>

          <h3>${total.toFixed(2)}</h3>

          </div>

          <button className="checkout-btn">

          Finalizar compra

          </button>

          </div>

          </>

        }

      </div>

    </div>

  );

}

export default CartDrawer;