import express from "express";
import {
  deleteScheme,
  getAllSchemes,
  getScheme,
  getSchemeByFilter,
  getSchemeBySearch,
  newScheme,
  updateScheme,
} from "../controllers/schemes.js";
import { isAuthenticatedAdmin } from "../middlewares/auth.js";
// import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new",isAuthenticatedAdmin, newScheme);

router.get("/getAll", getAllSchemes);

router.get("/search/:key", getSchemeBySearch);

router.get("/filter/:key", getSchemeByFilter);

router
  .route("/:id")
  .get(isAuthenticatedAdmin, getScheme)
  .put(isAuthenticatedAdmin, updateScheme)
  .delete(isAuthenticatedAdmin,deleteScheme);

export default router;
