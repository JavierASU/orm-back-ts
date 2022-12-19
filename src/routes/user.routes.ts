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

import { getCobrar, createCobrar } from "../controllers/cobrar.controllers";

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUserById);

router.get("/api/desviar", getDesviar);
router.post("/api/desviar", createDesviar);

router.get("/api/cobrar", getCobrar);
router.post("/api/cobrar", createCobrar);

/* router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
 */
export default router;
