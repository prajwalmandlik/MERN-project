import ErrorHandler from "../middlewares/error.js";
import { Schemes } from "../models/schemes.js";

export const newScheme = async (req, res, next) => {
  try {
    const { title, description, department, category, eligibility, benefits, requiredDocuments, steps, flare, link, img, note } = req.body;

    await Schemes.create({
      title,
      description,
      department, 
      category, 
      eligibility, 
      benefits, 
      requiredDocuments, 
      steps, 
      flare, 
      link, 
      img, 
      note
    });

    res.status(201).json({
      success: true,
      message: "scheme added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getSchemes = async (req, res, next) => {
  try {
    const schemes = await Schemes.find();

    res.status(200).json({
      success: true,
      schemes,
    });
  } catch (error) {
    next(error);
  }
};

export const updateScheme = async (req, res, next) => {
  try {
    const task = await Schemes.findById(req.params.id);

    if (!task) return next(new ErrorHandler("Scheme not found", 404));

    //write code to update 
    await task.save();

    res.status(200).json({
      success: true,
      message: "Scheme Updated!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteScheme = async (req, res, next) => {
  try {
    const task = await Schemes.findById(req.params.id);

    if (!task) return next(new ErrorHandler("Scheme not found", 404));
    await task.deleteOne();

    res.status(200).json({
      message: "Scheme Deleted!",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
