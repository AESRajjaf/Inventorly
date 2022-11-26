import { Router } from "express";
import {
  register,
  authenticate,
  confirmAccount,
  forgotPassword,
  confirmToken,
  newPassword,
  profile,
} from "../controllers/userController";
import checkAuth from "../middleware/checkAuth";

const router = Router();

router.post("/", register); // Registrar nuevo usuario
router.post("/login", authenticate); // Autenticar usuario
router.get("/confirm/:token", confirmAccount); // Confirmar cuenta
router.post("/reset-password", forgotPassword); // Restaurar contraseña olvidada
router.route("/reset-password/:token").get(confirmToken).post(newPassword); // Confirmar token y almacenar nueva contraseña
router.get("/profile", checkAuth, profile);

export { router };
