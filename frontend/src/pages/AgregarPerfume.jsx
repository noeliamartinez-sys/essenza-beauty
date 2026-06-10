import { useState } from "react";

function FormularioAgregarPerfume() {
  const [perfume, setPerfume] = useState({
    nombre: "",
    marca: "",
    categoria: "",
    precio: "",
    stock: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setPerfume({
      ...perfume,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Perfume agregado correctamente");

    console.log(perfume);

    setPerfume({
      nombre: "",
      marca: "",
      categoria: "",
      precio: "",
      stock: "",
      imagen: "",
    });
  };

  return (
    <div className="card p-4 mt-4">
      <h3>Agregar Perfume</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={perfume.nombre}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="text"
          name="marca"
          placeholder="Marca"
          value={perfume.marca}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={perfume.categoria}
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
          className="form-control mb-2"
          type="number"
          name="stock"
          placeholder="Stock"
          value={perfume.stock}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          type="text"
          name="imagen"
          placeholder="URL Imagen"
          value={perfume.imagen}
          onChange={handleChange}
        />

        <button className="btn btn-primary">Agregar Perfume</button>
      </form>
    </div>
  );
}

export default FormularioAgregarPerfume;
