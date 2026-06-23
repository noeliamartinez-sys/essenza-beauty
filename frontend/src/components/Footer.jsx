import "../styles/Footer.css";

function Footer() {

  return (

    <footer className="footer" id="contacto">

      <div className="footer-container">

        <div className="footer-column">

          <h2>ESSENZA</h2>

          <p>

            Fragancias originales inspiradas en la elegancia,
            el lujo y la sofisticación.

          </p>

        </div>

        <div className="footer-column">

          <h3>Colección</h3>

          <a href="#coleccion">Perfumes</a>

          <a href="#marcas">Marcas</a>

          <a href="#novedades">Novedades</a>

          <a href="#nosotros">Sobre nosotros</a>

        </div>

        <div className="footer-column">

          <h3>Información</h3>

          <p>Punta del Este</p>

          <p>Uruguay</p>

          <p>Atención personalizada</p>

          <p>Envíos a todo el país</p>

        </div>

        <div className="footer-column">

          <h3>Métodos de pago</h3>

          <p>Visa</p>

          <p>Mastercard</p>

          <p>Mercado Pago</p>

          <p>Transferencia bancaria</p>

        </div>

      </div>

      <div className="footer-social">

        <span>Instagram</span>

        <span>Facebook</span>

        <span>TikTok</span>

      </div>

      <div className="footer-copy">

        © 2026 Essenza Beauty · Punta del Este · Uruguay

      </div>

    </footer>

  );

}

export default Footer;