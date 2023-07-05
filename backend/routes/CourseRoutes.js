import express from "express";
import {
  getAllCourses,
  createCourse,
  getCourseLecture,
  addLecture
} from "../controllers/CourseController.js";
import singleUpload from "../middlewares/Multer.js";

const router = express.Router();

// Get all courses without lectures
router.route("/courses").get(getAllCourses);

// create new course - only admins
router.route("/createcourse").post( singleUpload ,createCourse);

// Add lectures, delete course, get course details
router.route("/course/:id").get(getCourseLecture).post(singleUpload ,addLecture)

// delete lectures

export default router;
