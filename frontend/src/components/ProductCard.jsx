import "../styles/ProductCard.css";
import { useCart } from "../context/CartContext";

function ProductCard({ perfume, onClick }) {

  const { agregarProducto } = useCart();

  return (

    <div className="product-card">

      <div
        className="product-image"
        onClick={() => onClick(perfume)}
      >

        <img
          src={perfume.imagen}
          alt={perfume.nombre}
        />

      </div>

      <div className="product-info">

        <p className="product-brand">
          {perfume.marca}
        </p>

        <h3>
          {perfume.nombre}
        </h3>

        <div className="stars">
          ★★★★★
        </div>

        <div className="price-row">
          ${perfume.precio}
        </div>

        <button
          className="add-cart-btn"
          onClick={() => agregarProducto(perfume)}
        >
          Agregar al carrito
        </button>

      </div>

    </div>

  );

}

export default ProductCard;