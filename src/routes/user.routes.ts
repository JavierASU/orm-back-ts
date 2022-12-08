import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  /* updateUser,
  deleteUser, */
} from "../controllers/user.controlles";
const router = Router();

import { getDesviar, createDesviar } from "../controllers/desviar.controllers";

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUserById);

router.get("/api/desviar", getDesviar);
router.post("/api/desviar", createDesviar);
/* router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
 */
export default router;
