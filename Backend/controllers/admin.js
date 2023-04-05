import bcrypt from "bcrypt";
import ErrorHandler from "../middlewares/error.js";
import { Admin } from "../models/admin.js";
import { sendCookieForAdmin } from "../utils/features.js";

export const login = async (req, res, next) => {
    try {
    
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) return next(new ErrorHandler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) 
      return next(new ErrorHandler("Invalid Email or Password", 400));

    sendCookieForAdmin(admin, res, `Welcome back, ${admin.email}`, 200);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    let admin = await Admin.findOne({ email });

    if (admin) return next(new ErrorHandler("User Already Exist", 400));

    const hashedPassword = await bcrypt.hash(password, 10);

    admin = await Admin.create({ email, password: hashedPassword });

    sendCookieForAdmin(admin, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    admin: req.admin,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
    .json({
      success: true,
      admin: req.admin,
    });
};
