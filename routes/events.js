const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middelwares/validar-campos");

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const router = Router();

//1)obtener eventos
router.get("/", getEventos);

//2) Crear nuevo evento, // con check tengo un objeto con los errores
router.post(
  "/",
  [check("name", "El nombre es obligatorio").not().isEmpty(), validarCampos],
  crearEvento
);

//3) Actualizar  evento
router.put("/:id", actualizarEvento);

//4) Borrar  evento
router.delete("/:id", eliminarEvento);

module.exports = router;


// /api/events/345678908765