import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  /* updateUser,
  deleteUser, */
} from "../controllers/user.controlles";
const router = Router();

router.post("/user", createUser);
router.get("/users", getUsers);
router.get("/user/:id", getUserById);
/* router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
 */
export default router;
