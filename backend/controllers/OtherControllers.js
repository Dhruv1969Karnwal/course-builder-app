import { catchAsyncError } from "../middlewares/CatchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import {sendEmail} from "../utils/SendEmail.js"

export const contact = catchAsyncError(async (req, res, next) => {
    const {name, email, message} = req.body

    if(!name || !email || !message) return next(new ErrorHandler("All fields are mandatory",400))

    const to=process.env.MY_MAIL

    const subject = "Contact from CourseBundler"
    const text = `I am ${name} and my email is ${email}. \n${message}`

    await sendEmail(to,subject,text)

  res.status(200).json({
    success: true,
    message:"Your message has been send."
  });
});

export const contactRequest = catchAsyncError(async (req, res, next) => {
    const {name, email, course} = req.body

    if(!name || !email || !course) return next(new ErrorHandler("All fields are mandatory",400))

    const to=process.env.MY_MAIL

    const subject = "Requesting for a course on CourseBundler"
    const text = `I am ${name} and my email is ${email}. \n${course}`

    await sendEmail(to,subject,text)

  res.status(200).json({
    success: true,
    message:"Your Request has been send."
  });
});
export const getDashboardStats = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});
