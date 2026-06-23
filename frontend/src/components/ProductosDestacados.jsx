import perfumes from "../data/perfumes";
import ProductCard from "./ProductCard";
import "../styles/ProductosDestacados.css";

function ProductosDestacados({ onSelect }) {

  const destacados = perfumes.slice(0,4);

  return (

    <section
      className="productos-destacados"
      id="destacados"
    >

      <p>

        SELECCIÓN

      </p>

      <h2>

        Perfumes Destacados

      </h2>

      <div className="destacados-grid">

        {

          destacados.map((perfume)=>(

            <ProductCard

              key={perfume.id}

              perfume={perfume}

              onClick={onSelect}

            />

          ))

        }

      </div>

    </section>

  );

}

export default ProductosDestacados;