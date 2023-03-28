import express from "express";
import {
  deleteScheme,
  getSchemes,
  newScheme,
  updateScheme,
} from "../controllers/schemes.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newScheme);

router.get("/my", isAuthenticated, getSchemes);

router
  .route("/:id")
  .put(isAuthenticated, updateScheme)
  .delete(isAuthenticated, deleteScheme);

export default router;
