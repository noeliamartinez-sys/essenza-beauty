import { useEffect, useState } from "react";

function FormularioAgregarPerfume({ perfumeEditar }) {

  const [perfume, setPerfume] = useState({
    nombre: "",
    marca: "",
    precio: "",
    imagen: "",
  });

  useEffect(() => {

    if (perfumeEditar) {

      setPerfume({
        nombre: perfumeEditar.nombre || "",
        marca: perfumeEditar.marca || "",
        precio: perfumeEditar.precio || "",
        imagen: perfumeEditar.imagen || "",
      });

    }

  }, [perfumeEditar]);

  const handleChange = (e) => {

    setPerfume({
      ...perfume,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (perfumeEditar) {

      alert("Perfume editado correctamente");

    } else {

      alert("Perfume agregado correctamente");

    }

    console.log(perfume);

  };

  return (

    <div className="card p-4 mt-4">

      <h3>

        {perfumeEditar ? "Editar perfume" : "Agregar perfume"}

      </h3>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          name="nombre"
          placeholder="Nombre"
          value={perfume.nombre}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="marca"
          placeholder="Marca"
          value={perfume.marca}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="number"
          name="precio"
          placeholder="Precio"
          value={perfume.precio}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="imagen"
          placeholder="URL Imagen"
          value={perfume.imagen}
          onChange={handleChange}
        />

        <button className="btn btn-dark">

          {perfumeEditar ? "Guardar cambios" : "Agregar perfume"}

        </button>

      </form>

    </div>

  );

}

export default FormularioAgregarPerfume;