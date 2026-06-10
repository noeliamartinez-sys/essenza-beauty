import { useState } from "react";

function FormularioEditarPerfume() {
  const [perfume, setPerfume] = useState({
    nombre: "Miss Dior",
    marca: "Dior",
    categoria: "Floral",
    precio: 7990,
    stock: 10,
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

    alert("Perfume actualizado");
  };

  return (
    <div className="card p-4 mt-4">
      <h3>Editar Perfume</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          name="nombre"
          value={perfume.nombre}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="text"
          name="marca"
          value={perfume.marca}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="text"
          name="categoria"
          value={perfume.categoria}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="number"
          name="precio"
          value={perfume.precio}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          type="number"
          name="stock"
          value={perfume.stock}
          onChange={handleChange}
        />

        <button className="btn btn-warning">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default FormularioEditarPerfume;
