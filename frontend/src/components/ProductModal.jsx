import "../styles/ProductModal.css";

function ProductModal({ perfume, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <img src={perfume.imagen} alt={perfume.nombre} />

        <h2>{perfume.nombre}</h2>
        <h4>{perfume.marca}</h4>

        <p>{perfume.descripcion}</p>

        <div className="notas">
          <h4>Notas olfativas</h4>
          <p><b>Salida:</b> {perfume.notas.salida}</p>
          <p><b>Corazón:</b> {perfume.notas.corazon}</p>
          <p><b>Fondo:</b> {perfume.notas.fondo}</p>
        </div>

        <span className="precio">${perfume.precio}</span>

        <button onClick={onClose}>
          Cerrar
        </button>

      </div>
    </div>
  );
}

export default ProductModal;