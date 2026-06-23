import "../styles/CategoriasPremium.css";

function CategoriasPremium() {

  const categorias = [

    {
      titulo: "Florales",
      texto: "Elegancia delicada"
    },

    {
      titulo: "Dulces",
      texto: "Notas intensas"
    },

    {
      titulo: "Amaderados",
      texto: "Carácter y personalidad"
    },

    {
      titulo: "Masculinos",
      texto: "Clásicos modernos"
    }

  ];

  return (

    <section className="categorias-premium">

      <p>

        COLECCIONES

      </p>

      <h2>

        Explora por aroma

      </h2>

      <div className="categorias-grid">

        {

          categorias.map((categoria)=>(

            <div
              key={categoria.titulo}
              className="categoria-premium-card"
            >

              <span>

                {categoria.titulo}

              </span>

              <small>

                {categoria.texto}

              </small>

            </div>

          ))

        }

      </div>

    </section>

  );

}

export default CategoriasPremium;