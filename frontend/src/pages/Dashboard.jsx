import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <DashboardCard
        titulo="Total Productos"
        valor="15"
      />

      <DashboardCard
        titulo="Marcas"
        valor="8"
      />

      <DashboardCard
        titulo="Stock Total"
        valor="149"
      />

      <DashboardCard
        titulo="Valor Stock"
        valor="$1.170.840"
      />
    </div>
  );
}

export default Dashboard;