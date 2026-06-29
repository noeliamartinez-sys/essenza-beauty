import "../styles/Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
                password
            });

            alert("Usuario registrado correctamente");

            navigate("/login");

        } catch {

            alert("No se pudo registrar");

        }

    };

    return (

        <div className="register-page">

            <div className="register-card">

                <h1>ESSENZA</h1>

                <h3>Registrarse</h3>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button type="submit">

                        Crear cuenta

                    </button>

                </form>

                <div className="register-links">

                    <Link to="/login">

                        Ya tengo una cuenta

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Register;