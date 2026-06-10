import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";

import "../styles/MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="content">
        <Navbar />
        <Dashboard />
      </div>

    </div>
  );
}

export default MainLayout;