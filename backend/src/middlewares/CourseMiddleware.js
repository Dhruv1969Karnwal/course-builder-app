const {ClientErrorCodes} = require("../utils/ErrorCode")

const validateCreateCourse = async (req, res, next) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.category ||
    !req.body.createdBy
  ) {
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid Request Body for create course",
      error: "Missing required fields for create course",
    });
  }

  next();
};

module.exports = {validateCreateCourse};