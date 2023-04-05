import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/admin.js";
import { isAuthenticated, isAuthenticatedAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);

router.get("/logout", logout);

router.get("/me", isAuthenticatedAdmin, getMyProfile);

export default router;
 