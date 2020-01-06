const { Schema, model } = require("mongoose");

const zapatoSchema = new Schema({
  codigo: {
    type: String,
    required: true
  },
  color: String,
  talla: Number,
  costo: Number,
  precioPublico: Number,
  precioPromotora: Number,
  marca: String,
  cantidad: Number,
  activo: Boolean
});

module.exports = model("Zapato", zapatoSchema);
