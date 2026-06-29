import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Perfumes from "./pages/Perfumes";
import AgregarPerfume from "./pages/AgregarPerfume";
import EditarPerfume from "./pages/EditarPerfume";
import VerPerfume from "./pages/VerPerfume";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/agregar-perfume" element={<AgregarPerfume />} />
        <Route path="/editar-perfume/:id" element={<EditarPerfume />} />
        <Route path="/ver-perfume/:id" element={<VerPerfume />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;