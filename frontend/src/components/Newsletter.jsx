import { useState } from "react";
import "../styles/Newsletter.css";

function Newsletter() {

  const [email, setEmail] = useState("");

  const suscribirse = () => {

    if (!email.includes("@")) {
      alert("Ingresá un correo válido.");
      return;
    }

    alert("¡Gracias por suscribirte!");

    setEmail("");
  };

  return (

    <section className="newsletter">

      <p>NEWSLETTER</p>

      <h2>
        Recibe novedades y lanzamientos exclusivos
      </h2>

      <div className="newsletter-form">

        <input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button onClick={suscribirse}>
          Suscribirme
        </button>

      </div>

    </section>

  );
}

export default Newsletter;