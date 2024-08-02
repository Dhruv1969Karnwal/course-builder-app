const express = require("express");
const router = express.Router();

const courseController = require("../../controllers/CourseController")
const CourseMiddleware = require("../../middlewares/index")

router.post("/create",CourseMiddleware.validateCreateCourse, courseController.createCourse)
router.get("/courses",courseController.getAllCourses)

module.exports = router;