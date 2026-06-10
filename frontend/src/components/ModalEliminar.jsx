function ModalEliminar({ perfume, onConfirmar, onCancelar }) {
  if (!perfume) return null;

  return (
    <div className="card p-4 mt-4 border-danger">
      <h4>Eliminar Perfume</h4>

      <p>
        ¿Está seguro que desea eliminar
        <strong> {perfume.nombre}</strong>?
      </p>

      <button className="btn btn-danger me-2" onClick={onConfirmar}>
        Eliminar
      </button>

      <button className="btn btn-secondary" onClick={onCancelar}>
        Cancelar
      </button>
    </div>
  );
}

export default ModalEliminar;
