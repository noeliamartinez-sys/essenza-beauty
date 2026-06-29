import "../styles/ProductosDestacados.css";

function ProductosDestacados() {

  const irColeccion = () => {
    document
      .getElementById("coleccion")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (

    <section className="destacados">

      <div className="titulo-section">

        <span>
          ESSENZA COLLECTION
        </span>

        <h2>
          Fragancias que marcan tendencia
        </h2>

        <p>
          Con estilo urbano. Diseñadas para quienes convierten cada aroma en una firma personal.
        </p>

      </div>

      <div className="video-banner">

        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/temp_videos/campaign.mp4"
            type="video/mp4"
          />
        </video>

        <div className="video-overlay">

          <button
            className="ver-mas-btn"
            onClick={irColeccion}
          >
            Ver colección completa
          </button>

        </div>

      </div>

    </section>

  );

}

export default ProductosDestacados;