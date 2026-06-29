import { useParams, Link } from "react-router-dom";
import perfumes from "../data/perfumesData";

function VerPerfume() {

  const { id } = useParams();

  const perfume = perfumes.find(
    p => p.id === Number(id)
  );

  if (!perfume) {

    return <h2>Perfume no encontrado</h2>;

  }

  return (

    <div style={{padding:"60px"}}>

      <Link to="/perfumes">

        ← Volver

      </Link>

      <br/><br/>

      <img
        src={perfume.imagen}
        alt={perfume.nombre}
        style={{
          width:"250px",
          borderRadius:"20px"
        }}
      />

      <h1>{perfume.nombre}</h1>

      <h3>{perfume.marca}</h3>

      <h2>${perfume.precio}</h2>

    </div>

  );

}

export default VerPerfume;