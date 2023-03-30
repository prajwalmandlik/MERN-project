import express from "express";
import {
  deleteScheme,
  getAllSchemes,
  getScheme,
  newScheme,
  updateScheme,
} from "../controllers/schemes.js";
// import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newScheme);

router.get("/getAll", getAllSchemes);

router
  .route("/:id")
  .get( getScheme )
  .put( updateScheme)
  .delete( deleteScheme);

export default router;
