import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

function CartButton() {

  const { cart } = useCart();

  const cantidad = cart.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  return (

    <button className="cart-button">

      <ShoppingBag size={18} strokeWidth={1.8}/>

      <span>{cantidad}</span>

    </button>

  );

}

export default CartButton;