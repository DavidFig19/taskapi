import express from "express";
import { auth } from "../middlewares/authMiddleware.js";
import { validateTask } from "../middlewares/validateMiddleware.js";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", auth, getTasks);
router.get("/:id", auth, getTaskById);
router.post("/", auth, validateTask, createTask);
router.put("/:id", auth, validateTask, updateTask);
router.delete("/:id", auth, deleteTask);

export default router;