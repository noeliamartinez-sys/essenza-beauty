import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

function CartButton({ abrirCarrito }) {

  const { cantidadTotal } = useCart();

  return (

    <button
      className="cart-button"
      onClick={abrirCarrito}
    >

      <ShoppingBag
        size={18}
        strokeWidth={1.8}
      />

      <span>{cantidadTotal}</span>

    </button>

  );

}

export default CartButton;