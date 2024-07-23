const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter course title"],
      minLength: [4, "Title must be at least 4 characters"],
      maxLength: [80, "Title can't exceed 80 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter course description"],
      minLength: [4, "Title must be at least 20 characters"],
    },
    lectures: [
      {
        title: {
          type: String,
          require: true,
        },
        description: {
          type: String,
          require: true,
        },
        video: {
          public_id: {
            type: String,
            require: true,
          },
          url: {
            type: String,
            require: true,
          },
        },
      },
    ],
    poster: {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
    views: {
      type: Number,
      default: 0,
    },
    numOfVideos: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: [true, "Enter Course Creator Name"],
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = {
  Course
};
