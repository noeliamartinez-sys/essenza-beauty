const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensaje: "Backend funcionando correctamente",
  });
});

module.exports = app;
