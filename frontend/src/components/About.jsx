import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="nosotros">

      <div className="about-left">

        <span className="about-subtitle">
          SOBRE NOSOTROS
        </span>

        <h2>
          La elegancia comienza con una esencia única.
        </h2>

        <p>

          Essenza Beauty nació con la visión de acercar las
          fragancias más exclusivas del mundo a quienes valoran
          el lujo, la autenticidad y la sofisticación en cada
          detalle.

        </p>

        <p>

          Desde Punta del Este, Uruguay, seleccionamos perfumes
          originales de las casas internacionales más prestigiosas,
          creando una experiencia inspirada en las boutiques de
          alta perfumería y en un estilo minimalista, moderno y
          atemporal.

        </p>

        <button>

          Descubrir Essenza

        </button>

      </div>

      <div className="about-right">

        <img
          src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
          alt="Perfume"
        />

      </div>

    </section>
  );
}

export default About;