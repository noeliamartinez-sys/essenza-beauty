import "./../styles/Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    setCargando(true);

    try {

      const response = await api.post("/users/login", {
        email,
        password
      });

      localStorage.setItem("token", response.data.token);

      if (response.data.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );
      }

      navigate("/");

    } catch (error) {

      alert("Correo o contraseña incorrectos.");

    } finally {

      setCargando(false);

    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>ESSENZA</h1>

        <p>Iniciar sesión</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={cargando}
          >
            {cargando ? "Ingresando..." : "Ingresar"}
          </button>

        </form>

        <div className="link">

          <Link to="/register">
            Crear una cuenta
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Login;