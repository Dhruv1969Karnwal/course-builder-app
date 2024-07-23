const {Course} = require("../models/index");

class CourseRepository {
    async createCourse(data){
        try {
            const course = await Course.create(data);
            return course;
        } catch (error) {
            console.error("Error in creating course",error);
        }
    }

    async deleteCourse(id){
        try {
            const course = await Course.deleteOne({_id:id});
            return course;
        } catch (error) {
            console.error("Error in deleting course",error);
        }
    }
}

module.exports = {
    CourseRepository,
}