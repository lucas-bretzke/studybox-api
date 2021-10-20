const router = require("express").Router();

const authentication = require("../middlewares/authMiddleware");
const turmasControllers = require("../controllers/turmasControllers");

router.get("/:id/aulas", turmasControllers.getAllAulasFromTurma);
router.get("/:id/alunos", turmasControllers.getAlunosFromTurma);
router.get("/", authentication(["aluno", "professor"]), turmasControllers.getTurmas);

module.exports = router;

