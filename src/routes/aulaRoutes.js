const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const aulaControllers = require("../controllers/aulaControllers")


router.post("/", multer(multerConfig).single("avatar"), aulaControllers.createAula);

router.get("/:id", aulaControllers.getAulaById);

router.delete("/:id", aulaControllers.deleteAula);

router.put("/:id", aulaControllers.editAula)

router.get("/", aulaControllers.getAllAula)

module.exports = router;