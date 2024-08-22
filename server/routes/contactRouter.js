import express from "express";
import { contactFormController } from "../controller/contactController.js";

const router = express.Router();

router.post("/contact-us", contactFormController);

export default router;
