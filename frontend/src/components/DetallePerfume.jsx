import "../styles/DetallePerfume.css";

function DetallePerfume({ perfume, cerrar }) {

  if (!perfume) return null;

  return (

    <div className="detalle-overlay" onClick={cerrar}>

      <div
        className="detalle-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="detalle-imagen">

          <img
            src={perfume.imagen}
            alt={perfume.nombre}
          />

        </div>

        <div className="detalle-info">

          <span className="detalle-marca">

            {perfume.marca}

          </span>

          <h2>

            {perfume.nombre}

          </h2>

          <div className="detalle-estrellas">

            ★★★★★

          </div>

          <p>

            Una fragancia sofisticada con una combinación elegante de notas exclusivas que aportan personalidad, frescura y una identidad única para cualquier ocasión.

          </p>

          <h3>

            ${perfume.precio}

          </h3>

          <div className="detalle-botones">

            <button>

              Agregar al carrito

            </button>

            <button className="outline">

              Seguir comprando

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default DetallePerfume;