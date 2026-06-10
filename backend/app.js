const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/products", productRoutes);

app.use("/users", userRoutes);

module.exports = app;
