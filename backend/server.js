const app = require("./app");
const sequelize = require("./config/database");

const PORT = 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a MySQL exitosa");

    app.listen(PORT, () => {
      console.log(`Servidor funcionando en puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar con MySQL:", error);
  });
