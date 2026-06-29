import "../styles/Explorar.css";

const marcas = [
  "Chanel",
  "Dior",
  "Yves Saint Laurent",
  "Carolina Herrera",

];

function Explorar({ perfumes, setMarca }) {
  const irAMarca = (marca) => {
    setMarca(marca);

    document
      .getElementById("coleccion")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="explorar">

      <span className="explorar-subtitle">
        MARCAS EXCLUSIVAS
      </span>

      <h2>
        Descubrí nuestras casas de perfumería
      </h2>

      <p className="explorar-texto">
        Seleccionamos únicamente las marcas más prestigiosas del mundo para ofrecer fragancias originales y de lujo.
      </p>

      <div className="explorar-grid">

        {marcas.map((marca) => {

          const cantidad = perfumes.filter(
            (p) => p.marca === marca
          ).length;

          return (

            <div
              key={marca}
              className="explorar-card"
              onClick={() => irAMarca(marca)}
            >

              <h3>{marca}</h3>

              <span>
                {cantidad} perfumes
              </span>

              <div className="explorar-link">
                Ver colección 
              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}

export default Explorar;