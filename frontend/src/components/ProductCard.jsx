import "../styles/ProductCard.css";

function ProductCard({ perfume,onClick }) {

return(

<div

className="product-card"

onClick={()=>onClick(perfume)}

>

<div className="badge">

Original

</div>

<img

src={perfume.imagen}

alt={perfume.nombre}

/>

<div className="product-info">

<p className="marca">

{perfume.marca}

</p>

<h3>

{perfume.nombre}

</h3>

<span>

${perfume.precio}

</span>

<div className="product-buttons">

<button>

Ver detalles

</button>

<button>

Agregar

</button>

</div>

</div>

</div>

);

}

export default ProductCard;