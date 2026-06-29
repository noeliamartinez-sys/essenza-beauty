import { Link } from "react-router-dom";
import { User } from "lucide-react";

function UserMenu() {

  const token = localStorage.getItem("token");

  const cerrarSesion = () => {

    localStorage.removeItem("token");

    window.location.reload();

  };

  if (!token) {

    return (

      <Link
        to="/login"
        className="login-btn"
      >

        <User
          size={18}
          strokeWidth={1.8}
        />

        <span>

          Iniciar sesión

        </span>

      </Link>

    );

  }

  return (

    <div className="user-menu">

      <User
        size={18}
        strokeWidth={1.8}
      />

      <span>

        Iniciar sesión

      </span>

      <button
        className="logout-nav"
        onClick={cerrarSesion}
      >

        Salir

      </button>

    </div>

  );

}

export default UserMenu;