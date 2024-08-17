import express, { json } from "express";
import colors from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRouter.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRouter.js";

const app = express();
dotenv.config({ path: "./config.env" });

app.use(express.json());
dotenv.config();
connectDB();
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running on mode on port ${PORT}`.bgYellow.black);
});