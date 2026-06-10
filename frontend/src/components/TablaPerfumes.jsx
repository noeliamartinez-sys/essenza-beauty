function TablaPerfumes({ perfumes, onVer, onEditar, onEliminar }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {perfumes.map((perfume) => (
          <tr key={perfume.id}>
            <td>
              <img src={perfume.imagen} alt={perfume.nombre} width="60" />
            </td>

            <td>{perfume.nombre}</td>
            <td>{perfume.marca}</td>
            <td>{perfume.categoria}</td>
            <td>${perfume.precio}</td>
            <td>{perfume.stock}</td>

            <td>
              <button
                className="btn btn-info btn-sm me-2"
                onClick={() => onVer(perfume)}
              >
                Ver
              </button>

              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEditar(perfume)}
              >
                Editar
              </button>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => onEliminar(perfume)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaPerfumes;
