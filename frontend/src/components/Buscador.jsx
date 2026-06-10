function Buscador({ busqueda, setBusqueda }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Buscar perfume..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
  );
}

export default Buscador;
