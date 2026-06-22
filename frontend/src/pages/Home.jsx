import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1>ESSENZA BEAUTY</h1>

          <p>
            Cada fragancia cuenta una historia.
          </p>

          <button className="hero-btn">
            Explorar colección
          </button>
        </div>
      </section>

      <section className="about">
        <h2>Sobre Nosotros</h2>

        <p>
          Essenza Beauty es una tienda especializada en perfumes y
          fragancias exclusivas. Nuestro objetivo es ayudarte a
          encontrar el aroma perfecto para cada ocasión.
        </p>
      </section>

      <section className="categories">
        <h2>Categorías</h2>

        <div className="category-grid">

          <div className="category-card">
            🌸 Florales
          </div>

          <div className="category-card">
            🍋 Cítricos
          </div>

          <div className="category-card">
            🌙 Nocturnos
          </div>

          <div className="category-card">
            ✨ Premium
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;