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
// import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", newScheme);

router.get("/getAll", getAllSchemes);

router.get("/search/:key", getSchemeBySearch);

router.get("/filter/:key", getSchemeByFilter);

router
  .route("/:id")
  .get(getScheme)
  .put(updateScheme)
  .delete(deleteScheme);

export default router;
