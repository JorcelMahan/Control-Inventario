const { Router } = require("express");
const router = Router();

const {
  getZapato,
  getZapatos,
  updateZapatos,
  deleteZapato,
  createZapato
} = require("../controllers/zapatos");

router
  .route("/")
  .get(getZapatos)
  .post(createZapato);

router
  .route("/:id")
  .get(getZapato)
  .delete(deleteZapato)
  .put(updateZapatos);

module.exports = router;
