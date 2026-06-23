import "../styles/Marcas.css";

function Marcas() {

  const marcas = [
    "CHANEL",
    "DIOR",
    "YVES SAINT LAURENT",
    "CAROLINA HERRERA",
    "ARMANI"
  ];

  return (

    <section className="marcas" id="marcas">

      <p className="marcas-subtitle">

        MARCAS EXCLUSIVAS

      </p>

      <h2>

        Selección Internacional

      </h2>

      <div className="marcas-grid">

        {marcas.map((marca) => (

          <div className="marca-card" key={marca}>

            {marca}

          </div>

        ))}

      </div>

    </section>

  );

}

export default Marcas;