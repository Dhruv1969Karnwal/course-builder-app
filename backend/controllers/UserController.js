import {catchAsyncError} from "../middlewares/CatchAsyncError.js"
import ErrorHandler from "../utils/ErrorHandler.js"

import {User} from "../models/User.js"
import { sendToken } from "../utils/SendToken.js"


export const register = catchAsyncError(async (req,res,next) => {

    const {name, email, password} = req.body
    // const file = req.file

    if(!name || !email || !password) return next(new ErrorHandler("Please enter all fields",400))

    let user = await User.findOne({email});

    if(user) return next(new ErrorHandler("User Already Exists",409))

    // upload file on cloudinary

    user = await User.create({
        name, email, password,
        avatar:{
            public_id:"temp",
            url:"temp"
        }
    })

    sendToken(res,user,"Registered Successfully",201)

    

})