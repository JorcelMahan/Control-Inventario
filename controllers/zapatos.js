const zapatos = {};

const Zapato = require("../models/Zapato");

zapatos.getZapatos = async (req, res) => {
  const zapato = await Zapato.find();
  res.json(notes);
};

zapatos.createZapato = async (req, res) => {
  const { codigo, color, talla, costo, marca, cantidad } = req.body;
  const newZapatos = new Zapato({
    codigo,
    color,
    talla,
    costo,
    marca,
    cantidad
  });
  await newZapatos.save();
  res.json("New zapato addes");
};

zapatos.getZapato = async (req, res) => {
  const zapato = await Zapato.findById(req.params.id);
  res.json(zapato);
};

zapatos.deleteZapato = async (req, res) => {
  await Zapato.findByIdAndDelete(req.params.id);
  res.json("zapato deleted");
};

zapatos.updateZapatos = async (req, res) => {
  const { codigo, color, talla, costo, marca, cantidad } = req.body;
  await Zapato.findByIdAndUpdate(req.params.id, {
    codigo,
    color,
    talla,
    costo,
    marca,
    cantidad
  });
  res.json("Zapato updated");
};

module.exports = zapatos;
