import { useState } from "react";

import perfumes from "../data/perfumes";

import Navbar from "../components/Navbar";
import BannerSuperior from "../components/BannerSuperior";
import Hero from "../components/Hero";
import LuxurySection from "../components/LuxurySection";
import Stats from "../components/Stats";
import Explorar from "../components/Explorar";
import Buscador from "../components/Buscador";
import ProductosDestacados from "../components/ProductosDestacados";
import ProductCard from "../components/ProductCard";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import DetallePerfume from "../components/DetallePerfume";
import Cart from "../components/Cart";

import "../styles/Home.css";

function Home() {

  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [selected, setSelected] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const marcas = [
    "Todos",
    "Chanel",
    "Dior",
    "YSL",
    "Armani",
    "Tom Ford",
    "Versace",
    "Paco Rabanne"
  ];

  const filtrados = perfumes.filter((perfume) => {

    const coincideBusqueda =
      perfume.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      perfume.marca.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todos" ||
      perfume.marca === categoria;

    return coincideBusqueda && coincideCategoria;

  });

  return (

    <div className="home">

      <BannerSuperior />

      <Navbar abrirCarrito={() => setCarritoAbierto(true)} />

      <Hero />

      <LuxurySection />

      <Stats />

      <Explorar
        perfumes={perfumes}
        setCategoria={setCategoria}
      />

      <ProductosDestacados />

      <section
        className="catalogo"
        id="coleccion"
      >

        <Buscador
          busqueda={busqueda}
          setBusqueda={setBusqueda}
        />

        <div className="marcas-filtro">

          {marcas.map((marca) => (

            <button
              key={marca}
              className={categoria === marca ? "marca-activa" : ""}
              onClick={() => setCategoria(marca)}
            >
              {marca}
            </button>

          ))}

        </div>

        <div className="catalogo-grid">

          {filtrados.map((perfume) => (

            <ProductCard
              key={perfume.id}
              perfume={perfume}
              onClick={setSelected}
            />

          ))}

        </div>

      </section>

      <About />

      <Newsletter />

      <Footer />

      <DetallePerfume
        perfume={selected}
        cerrar={() => setSelected(null)}
      />

      <Cart
        abierto={carritoAbierto}
        cerrar={() => setCarritoAbierto(false)}
      />

    </div>

  );

}

export default Home;