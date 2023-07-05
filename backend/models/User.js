import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken"

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validator: validator.isEmail,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [6, "Password must be at least 6 characters"],
    // validator:validator.isEmail
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  subscription: {
    id: String,
    status: String,
  },
  avatar: {
    public_id: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  playlist:[
    {
        course:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        },
        poster: String
    }
  ],
  createdAT:{
    type:Date,
    default:Date.now,
  },
  ResetPasswordToken: String,
  ResetPasswordExpire: String,
});

schema.methods.getJWTToken = function (){
  return jwt.sign({_id:this._id},process.env.JWT_SECRET,{
    expiresIn:"15d",
  })
}

export const User = mongoose.model("User", schema);
