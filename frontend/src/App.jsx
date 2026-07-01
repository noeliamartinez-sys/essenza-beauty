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

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/perfumes"
          element={
            <PrivateRoute>
              <Perfumes />
            </PrivateRoute>
          }
        />

        <Route
          path="/agregar-perfume"
          element={
            <PrivateRoute>
              <AgregarPerfume />
            </PrivateRoute>
          }
        />

        <Route
          path="/editar-perfume/:id"
          element={
            <PrivateRoute>
              <EditarPerfume />
            </PrivateRoute>
          }
        />

        <Route
          path="/ver-perfume/:id"
          element={
            <PrivateRoute>
              <VerPerfume />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;