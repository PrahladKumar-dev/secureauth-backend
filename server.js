import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
