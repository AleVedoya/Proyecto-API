const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    mensaje: String
})

module.exports = mongoose.model("datos", schema)