import "../styles/Categorias.css";

function Categorias() {
  const categorias = [
    {
      nombre: "Florales",
      emoji: "🌸"
    },
    {
      nombre: "Dulces",
      emoji: "🍓"
    },
    {
      nombre: "Amaderados",
      emoji: "🌿"
    },
    {
      nombre: "Masculinos",
      emoji: "🖤"
    }
  ];

  return (
    <section className="categorias">

      <h2>Explora por categoría</h2>

      <div className="categorias-grid">

        {categorias.map((categoria, index) => (

          <div className="categoria-card" key={index}>

            <span>{categoria.emoji}</span>

            <h3>{categoria.nombre}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categorias;