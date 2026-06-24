import {
  BsInstagram,
  BsFacebook,
  BsTiktok
} from "react-icons/bs";

import { MapPin, Mail } from "lucide-react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* LOGO */}
      <div className="footer-logo">
        ESSENZA
      </div>

      {/* SECCIONES */}
      <div className="footer-container">

        {/* INFO */}
        <div className="footer-column">
          <h5>Sobre nosotros</h5>
          <p>
           Este sitio fue desarrollado por tres mujeres, combinando trabajo en equipo y buen gusto por las aromas de diseñador crearon una tienda moderna inspirada en el mundo de las fragancias de lujo.
          </p>
        </div>

        {/* CONTACTO */}
        <div className="footer-column">
          <h4>Contacto</h4>

          <div className="footer-item">
            <Mail size={16} />
            <span>essenza@gmail.com</span>
          </div>

          <div className="footer-item">
            <MapPin size={16} />
            <span>Punta del Este · Uruguay</span>
          </div>
        </div>

        {/* REDES */}
        <div className="footer-column">
          <h4>Redes</h4>

          <div className="footer-social">

            <a href="#">
              <BsInstagram size={18} />
            </a>

            <a href="#">
              <BsFacebook size={18} />
            </a>

            <a href="#">
              <BsTiktok size={18} />
            </a>

          </div>
        </div>

        {/* PAGOS */}
        <div className="footer-column">
          <h4>Métodos de pago</h4>

          <p>Visa · Mastercard · Mercado Pago</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} ESSENZA. Todos los derechos reservados.
      </div>

    </footer>
  );
}

export default Footer;