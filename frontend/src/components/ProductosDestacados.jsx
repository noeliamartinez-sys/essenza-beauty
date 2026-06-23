import "../styles/ProductosDestacados.css";
import ProductCard from "./ProductCard";

function ProductosDestacados({ perfumes, onSelect }) {

  return (

    <section className="destacados" id="coleccion">

      <div className="titulo-section">

        <span>

          ESSENZA COLLECTION

        </span>

        <h2>

          Fragancias que marcan tendencia

        </h2>

        <p>

          Una selección exclusiva de las casas de perfumería más reconocidas del mundo.

        </p>

      </div>

      <div className="destacados-grid">

        {perfumes.map((perfume) => (

          <ProductCard

            key={perfume.id}

            perfume={perfume}

            onClick={onSelect}

          />

        ))}

      </div>

      <div className="ver-mas">

        <button>

          Ver colección completa

        </button>

      </div>

    </section>

  );

}

export default ProductosDestacados;