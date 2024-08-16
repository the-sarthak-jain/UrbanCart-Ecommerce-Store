import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  regiterController,
  testController,
  updateProfileController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { updateProductController } from "../controller/productController.js";
const router = express.Router();

router.post("/register", regiterController);

router.post("/login", loginController);

router.post("/forgot-password", forgotPasswordController);

// Protected User Router Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/test", requireSignIn, isAdmin, testController);

// Update Profile
router.put("/profile", requireSignIn, updateProfileController);

// Orders
router.get("/orders", requireSignIn, getOrdersController);

// All Orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// Order Status Update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
