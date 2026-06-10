const app = require("./app");
const sequelize = require("./config/database");
const Product = require("./models/Product");
const User = require("./models/User");

const PORT = 3000;

sequelize
  .sync()
  .then(() => {
    console.log("Base de datos sincronizada");

    app.listen(PORT, () => {
      console.log(`Servidor funcionando en puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar con MySQL:", error);
  });
