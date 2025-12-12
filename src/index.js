import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log("Servidor corriendo en el puerto", process.env.PORT || 4000);
});