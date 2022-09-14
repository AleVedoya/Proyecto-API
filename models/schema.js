const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    id: Number,
    mensaje: String
})

module.exports = mongoose.model("datos", schema)