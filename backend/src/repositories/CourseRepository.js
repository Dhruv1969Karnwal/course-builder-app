const { Course } = require("../models/index");

class CourseRepository {
  async createCourse(data) {
    try {
      const { title, description, category, createdBy } = data;
      // console.log("data",data);
      const course = await Course.create({
        title,
        description,
        category,
        createdBy,
      });
      return course;
    } catch (error) {
      console.error("Something went wrong at repository layer");
      throw { error };
    }
  }
}

module.exports = {
  CourseRepository,
};
