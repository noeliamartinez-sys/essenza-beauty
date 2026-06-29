function ModalEliminar({

    perfume,
    onConfirmar,
    onCancelar

}){

if(!perfume) return null;

return(

<div
style={{
position:"fixed",
inset:0,
background:"rgba(0,0,0,.55)",
display:"flex",
justifyContent:"center",
alignItems:"center",
zIndex:9999
}}
>

<div
style={{
background:"white",
padding:"40px",
borderRadius:"20px",
width:"420px",
textAlign:"center"
}}
>

<h2>

Eliminar perfume

</h2>

<p
style={{
margin:"25px 0"
}}
>

¿Desea eliminar

<strong>

{" "}{perfume.nombre}

</strong>

?

</p>

<div
style={{
display:"flex",
justifyContent:"center",
gap:"20px"
}}
>

<button
className="btn btn-danger"
onClick={onConfirmar}
>

Eliminar

</button>

<button
className="btn btn-secondary"
onClick={onCancelar}
>

Cancelar

</button>

</div>

</div>

</div>

);

}

export default ModalEliminar;
