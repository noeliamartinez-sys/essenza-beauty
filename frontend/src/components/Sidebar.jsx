import "../styles/Sidebar.css";

function Sidebar({ categoria, setCategoria }) {

const categorias=[

"Todos",

"Floral",

"Dulce",

"Frutal",

"Masculino",

"Amaderado"

];

return(

<div className="sidebar">

<h3>

Colección

</h3>

{

categorias.map((item)=>(

<button

key={item}

className={categoria===item?"activo":""}

onClick={()=>setCategoria(item)}

>

{item}

</button>

))

}

</div>

);

}

export default Sidebar;