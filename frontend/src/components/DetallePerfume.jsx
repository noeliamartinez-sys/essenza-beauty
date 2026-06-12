function DetallePerfume({ perfume }) {
  if (!perfume) return null;

  return (
    <div className="card p-3 mt-4">

      <img
        src="https://via.placeholder.com/200x200?text=Perfume"
        alt={perfume.nombre}
        width="200"
      />

      <h3>{perfume.nombre}</h3>

      <p>Marca: {perfume.marca}</p>
      <p>Categoría: {perfume.categoria}</p>
      <p>Precio: ${perfume.precio}</p>
      <p>Stock: {perfume.stock}</p>

    </div>
  );
}

export default DetallePerfume;
