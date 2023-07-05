import { CatchAsyncError } from '../middlewares/CatchAsyncError.js'
import {Course} from '../models/Course.js'
export const getAllCourses = CatchAsyncError(async (req, res, next) => {
    const courses = await Course.find();
    res.status(200).json({
        success:true,
        courses,
    })
})