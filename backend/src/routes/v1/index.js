const express = require("express");
const router = express.Router();

const courseController = require("../../controllers/CourseController")

router.post("/create",courseController.createCourse)
router.get("/courses",courseController.getAllCourses)

module.exports = router;