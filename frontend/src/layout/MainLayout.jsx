import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";

export default function MainLayout() {
  return (
    <div className="layout">


      <aside className="sidebar">
        <h2>Essenza Beauty</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/productos">Productos</Link>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>

    </div>
  );
}