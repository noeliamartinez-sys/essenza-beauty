import "../styles/Buscador.css";

function Buscador({ busqueda, setBusqueda }) {

  return (

    <section className="buscador">

      <div className="buscador-contenedor">

        <h2>Encuentra tu fragancia ideal</h2>

        <p>
          Explora nuestra colección de perfumes exclusivos.
        </p>

        <input
          type="text"
          placeholder="Buscar por nombre o marca..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

      </div>

    </section>

  );

}

export default Buscador;
