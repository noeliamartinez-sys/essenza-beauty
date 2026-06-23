<section className="hero">

<h1>Perfumes exclusivos</h1>

<p>

Descubrí aromas únicos seleccionados especialmente para vos.

</p>

<button>

Explorar colección

</button>

</section>
import "../styles/DashboardCard.css";

function DashboardCard({ titulo, valor }) {
  return (
    <div className="card">
      <h4>{titulo}</h4>
      <p>{valor}</p>
    </div>
  );
}

export default DashboardCard;