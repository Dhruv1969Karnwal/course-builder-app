const {Course} = require("../models/index");

class CourseRepository {
    async createCourse(data){
        try {
            const course = await Course.create(data);
            return course;
        } catch (error) {
            console.error("Something went wrong at repository layer");
            throw{error};
        }
    }

    
}

module.exports = {
    CourseRepository,
}