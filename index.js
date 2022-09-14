require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const port = process.env.PORT;
const mongoAccess = process.env.DATABASE_URL;
const modelo = require("./models/schema");

mongoose.connect(mongoAccess);
const dataBase = mongoose.connection;

dataBase.on("error", (error) => {
  console.log(error);
});

dataBase.once("connected", () => {
  console.log("Mongo está OK");
});

app.get("/", (req, res) => {
  res.status(200).json({
    respuesta: "Hola Mundo!!",
  });
});

app.get("/mongo", async (req, res) => {
  const datos = await modelo.find();
  res.json(datos);
});

app.post("/mongo", async (req, res) => {
  const mensajes = new modelo({
    mensaje: req.body.mensaje,
  });
  try {
    const guardado = await mensajes.save();
    res.json(guardado);
  } catch (error) {
    res.status(500).json({
      error: error.mensaje,
    });
  }
});

app.listen(port, () => {
  console.log(`Todo bien, puerto ${port}`);
});
