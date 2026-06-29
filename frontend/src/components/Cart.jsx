import "../styles/Cart.css";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart({ abierto, cerrar }) {

  const {
    cart,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    total,
  } = useCart();

  return (
    <>
      <div
        className={abierto ? "cart-overlay active" : "cart-overlay"}
        onClick={cerrar}
      />

      <aside
        className={abierto ? "cart-panel active" : "cart-panel"}
      >

        <div className="cart-header">

          <div>

            <span className="cart-subtitle">
              ESSENZA BEAUTY
            </span>

            <h2>
              Mi carrito
            </h2>

          </div>

          <button
            className="close-cart"
            onClick={cerrar}
          >
            <X size={22}/>
          </button>

        </div>

        {
          cart.length === 0 ? (

            <div className="cart-empty">

              <ShoppingBag size={70}/>

              <h3>
                Tu carrito está vacío
              </h3>

              <p>
                Descubrí nuestra colección exclusiva de perfumes.
              </p>

            </div>

          ) : (

            <>
              <div className="cart-items">

                {

                  cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <img
                        src={item.imagen}
                        alt={item.nombre}
                      />

                      <div className="cart-info">

                        <span>

                          {item.marca}

                        </span>

                        <h4>

                          {item.nombre}

                        </h4>

                        <p>

                          ${item.precio}

                        </p>

                        <div className="quantity">

                          <button
                            onClick={() =>
                              disminuirCantidad(item.id)
                            }
                          >
                            <Minus size={15}/>
                          </button>

                          <strong>

                            {item.cantidad}

                          </strong>

                          <button
                            onClick={() =>
                              aumentarCantidad(item.id)
                            }
                          >
                            <Plus size={15}/>
                          </button>

                        </div>

                      </div>

                      <button
                        className="delete-product"
                        onClick={() =>
                          eliminarProducto(item.id)
                        }
                      >

                        <Trash2 size={18}/>

                      </button>

                    </div>

                  ))

                }

              </div>

              <div className="cart-footer">

                <div className="cart-total">

                  <span>

                    Total

                  </span>

                  <strong>

                    ${total.toFixed(2)}

                  </strong>

                </div>

                <button className="checkout-btn">

                  Finalizar compra

                </button>

              </div>

            </>

          )

        }

      </aside>

    </>
  );

}

export default Cart;