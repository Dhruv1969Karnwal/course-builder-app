const { Course } = require("../models/index");

class CourseRepository {
  #createFilter(data) {
    // this is private member function (with #)
    let filter = {};
    if (data.keyword) {
      Object.assign(filter, { title: { $regex: data.keyword, $options: "i" } });
    }
    if (data.category) {
      Object.assign(filter, {
        category: { $regex: data.category, $options: "i" },
      });
    }
    return filter;
  }

  async getAllCourses(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      // console.log(filterObject);
      const courses = await Course.find(filterObject).select("-lectures");
      return courses;
    } catch (error) {
      console.error("Something went wrong at repository layer");
      throw { error };
    }
  }
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
