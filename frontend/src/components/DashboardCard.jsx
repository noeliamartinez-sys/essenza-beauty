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