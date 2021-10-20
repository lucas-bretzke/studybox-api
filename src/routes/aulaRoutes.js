const router = require("express").Router();
const aulaControllers = require("../controllers/aulaControllers")


router.post("/", aulaControllers.createAula);

router.get("/:id", aulaControllers.getAulaById);

router.delete("/:id", aulaControllers.deleteAula);

router.put("/:id", aulaControllers.editAula)

router.get("/", aulaControllers.getAllAula)

module.exports = router;