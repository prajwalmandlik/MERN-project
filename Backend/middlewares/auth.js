import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.js";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First",
    });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded._id);
  next();
};

export const isAuthenticatedAdmin = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({
      success: false,
      message: "Login First",
    });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.admin = await Admin.findById(decoded._id);
  next();
};
 