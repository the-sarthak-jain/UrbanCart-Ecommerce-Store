import express, { json } from "express";
import colors from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRouter.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRouter.js";
import contactRouter from "./routes/contactRouter.js";
import cors from "cors";

const app = express();
dotenv.config({ path: "./config.env" });

app.use(cors({
  origin: ['http://localhost:3000'], // Add your frontend URL
  credentials: true, // If you need to allow cookies/auth headers
}));

app.use(express.json());
dotenv.config();
connectDB();
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/contact", contactRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running on mode on port ${PORT}`.bgYellow.black);
});
