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
          src="https://images.pexels.com/photos/19235971/pexels-photo-19235971.jpeg?_gl=1*1wuhl8t*_ga*MTc3NjgxMzM1MS4xNzgwOTUxNTU0*_ga_8JE65Q40S6*czE3ODIyNTYyMzgkbzUkZzEkdDE3ODIyNTgxNzQkajM1JGwwJGgw"
          alt="Perfume"
        />

      </div>

    </section>
  );
}

export default About;