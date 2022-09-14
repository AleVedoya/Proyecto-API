const express = require("express");
const mongoose = require("mongoose")
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        respuesta: "Hola Mundo!!"
    })
    
})

app.get("/error", (req, res) => {
    res.status(400).json({
        respuesta: "Error 400"
    })
})

app.post("/", (req, res) => {
    const clienteData = req.body
    res.status(200).send("Posteaste el dato con éxito")
})

app.listen(3000, () => {
    console.log("Todo bien, puerto 3000");
});