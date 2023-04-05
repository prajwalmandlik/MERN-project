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

export const getAllSchemes = async (req, res, next) => {
  try {
    const schemes = await Schemes.find().select("_id title description flare link");

    res.status(200).json({
      success: true,
      schemes,
    });
  } catch (error) {
    next(error);
  }
};

export const getScheme = async (req, res, next) => {
  try {
    const scheme = await Schemes.findById(req.params.id);

    if (!scheme) return next(new ErrorHandler("Scheme not found", 404));

    res.status(200).json({
      success: true,
      scheme,
    });
  } catch (error) {
    next(error);
  }
};

export const getSchemeBySearch = async (req, res, next) => {
  try {
    const scheme = await Schemes.find(
      {
        "$or":[
          {title:{$regex: req.params.key ,$options: "i"}},
          {description:{$regex: req.params.key ,$options: "i"}},
          {eligibility:{$regex: req.params.key ,$options: "i"}},
          {category:{$regex: req.params.key ,$options: "i"}},
        ]
      }
    ).select("_id title description flare link");

    if (!scheme) return next(new ErrorHandler("Scheme not found", 404));

    res.status(200).json({
      success: true,
      scheme,
    });
  } catch (error) {
    next(error);
  }
};

export const getSchemeByFilter = async (req, res, next) => {
  
  try {
    const scheme = await Schemes.find(
      {
        "$or":[
          {category:{$regex: req.params.key}}
        ]
      }
    ).select("_id title description flare link");
    if (!scheme) return next(new ErrorHandler("Scheme not found", 404));

    res.status(200).json({
      success: true,
      scheme,
    });
  } catch (error) {
    next(error);
  }
};

export const updateScheme = async (req, res, next) => {
  try {
    const scheme = await Schemes.findById(req.params.id);

    if (!scheme) return next(new ErrorHandler("Scheme not found", 404));

    const { title, description, department, category, eligibility, benefits, requiredDocuments, steps, flare, link, img, note } = req.body;
    //code to update 
    await scheme.updateOne({
      $set: {
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
      }
    })

    await scheme.save();

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
