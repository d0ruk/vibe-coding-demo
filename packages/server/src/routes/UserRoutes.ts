import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

router.post("/users", UserController.createUser);
router.delete("/users/:id", UserController.deleteUser);
router.put("/users/:id", UserController.updateUser);
router.get("/users", UserController.listUsers);
router.get("/users/:id", UserController.getUser);

export default router;
