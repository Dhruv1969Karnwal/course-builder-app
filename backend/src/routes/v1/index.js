const express = require("express");
const router = express.Router();

const courseController = require("../../controllers/CourseController")

router.post("/create",courseController.createCourse)

module.exports = router;