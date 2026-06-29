import "./../styles/Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login(){

const[email,setEmail]=useState("");

const[password,setPassword]=useState("");

const navigate=useNavigate();

const handleLogin=async(e)=>{

e.preventDefault();

try{

const response=await api.post("/users/login",{

email,

password

});

localStorage.setItem("token",response.data.token);

navigate("/");

}

catch{

alert("Datos incorrectos");

}

};

return(

<div className="login-page">
    

<div className="login-card">

    <h1>ESSENZA</h1>
    <p>Iniciar sesión</p>

<form onSubmit={handleLogin}>

<input

type="email"

placeholder="Correo"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>

<input

type="password"

placeholder="Contraseña"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>

<button>

Ingresar

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