import express from "express"
import { getAllCourses, createCourse } from "../controllers/CourseController.js";

const router = express.Router();

// Get all courses without lectures
router.route("/courses").get(getAllCourses)

// create new course - only admins
router.route("/createcourse").post(createCourse)

// Add lectures, delete course, get course details

// delete lectures

export default router;