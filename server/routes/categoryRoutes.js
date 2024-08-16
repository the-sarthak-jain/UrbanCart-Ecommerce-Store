import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

import {
  categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "./../controller/categoryController.js";

const router = express.Router();

// Routes
// Create Category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);
router.get("/get-category", categoryController);
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);
router.get(
  "/single-category/:slug",
  requireSignIn,
  isAdmin,
  singleCategoryController
);
router.put(
  "/edit-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

export default router;
