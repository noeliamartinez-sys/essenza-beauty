import { useState } from "react";

import perfumes from "../data/perfumes";

import Navbar from "../components/Navbar";
import BannerSuperior from "../components/BannerSuperior";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Marcas from "../components/Marcas";
import CategoriasPremium from "../components/CategoriasPremium";
import Novedades from "../components/Novedades";
import Buscador from "../components/Buscador";
import ProductosDestacados from "../components/ProductosDestacados";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import About from "../components/About";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import DetallePerfume from "../components/DetallePerfume";

import "../styles/Home.css";

function Home() {

  const [selected, setSelected] = useState(null);

  const [busqueda, setBusqueda] = useState("");

  const [categoria, setCategoria] = useState("Todos");

  const filtrados = perfumes.filter((perfume) => {

    const coincideBusqueda =

      perfume.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase()) ||

      perfume.marca
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    const coincideCategoria =

      categoria === "Todos" ||

      perfume.categoria === categoria;

    return coincideBusqueda && coincideCategoria;

  });

  return (

    <div className="home">

      <BannerSuperior />

      <Navbar />

      <Hero />

      <Stats />

      <Marcas />

      <CategoriasPremium />

      <Novedades />

      <Buscador

        busqueda={busqueda}

        setBusqueda={setBusqueda}

      />

      <ProductosDestacados

        perfumes={perfumes.slice(0,4)}

        onSelect={setSelected}

      />

      <section
        className="catalogo"
        id="coleccion"
      >

        <Sidebar

          categoria={categoria}

          setCategoria={setCategoria}

        />

        <div className="catalogo-grid">

          {

            filtrados.map((perfume) => (

              <ProductCard

                key={perfume.id}

                perfume={perfume}

                onClick={setSelected}

              />

            ))

          }

        </div>

      </section>

      <About />

      <Newsletter />

      <Footer />

      <DetallePerfume

        perfume={selected}

        cerrar={() => setSelected(null)}

      />

    </div>

  );

}

export default Home;