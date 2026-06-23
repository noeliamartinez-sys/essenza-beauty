import "../styles/Hero.css";

function Hero() {

  return (

    <section className="hero" id="inicio">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span>

          LUXURY COLLECTION

        </span>

        <h1>

          La esencia del lujo en una sola fragancia

        </h1>

        <p>

          Perfumes originales seleccionados de las casas más prestigiosas del mundo.

        </p>

        <div className="hero-buttons">

          <button>

            Comprar ahora

          </button>

          <button className="outline">

            Explorar

          </button>

        </div>

      </div>

    </section>

  );

}

export default Hero;