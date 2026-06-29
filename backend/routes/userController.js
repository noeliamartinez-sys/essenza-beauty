res.json({

message:"Login exitoso",

token,

user:{

id:user.id,

nombre:user.nombre,

email:user.email

}

});