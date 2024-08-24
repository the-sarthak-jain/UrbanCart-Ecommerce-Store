import express from "express";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getAllProductController,
  getSingleProductController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  updateProductController,
} from "../controller/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

// Routes
router.post(
  "/create-products",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.get("/get-products", formidable(), getAllProductController);

router.get("/find-products/:slug", formidable(), getSingleProductController);

router.get("/get-photo/:pid", formidable(), productPhotoController);

router.delete(
  "/delete-products/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  deleteProductController
);

router.put(
  "/edit-products/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// Product Filter
router.post("/product-filters", productFilterController);

// Product Count
router.get("/product-count", productCountController);

// Product list base on page
router.get("/product-list/:page", productListController);

// payment routes
// token
router.get("/braintree/token", braintreeTokenController);

// payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

export default router;
