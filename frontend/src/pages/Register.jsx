import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post("/users/register", {
        nombre,
        email,
        password,
      });

      alert("Usuario registrado");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Error al registrar usuario");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registro</h2>

      <form onSubmit={handleRegister}>
        <input
          className="form-control mb-3"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-success">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;