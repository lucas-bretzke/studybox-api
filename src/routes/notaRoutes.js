const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const notasControllers = require("../controllers/notasControllers")


router.post("/", multer(multerConfig).single("avatar"), notasControllers.createNotas);

router.get("/:id/prova", notasControllers.getNotasByProvaId);

router.get("/:id/user", notasControllers.getNotasByUserId);

router.delete("/", notasControllers.deleteNotas);

router.put("/", notasControllers.editNotas)

router.get("/", notasControllers.getAllNotas)

module.exports = router;