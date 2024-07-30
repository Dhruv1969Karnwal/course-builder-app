const {CourseRepository} = require("../repositories/index")

class CourseService {
    constructor(){
        this.courseRepository = new CourseRepository();
    }

    async createCourse(data) {
        try {
            const course = await this.courseRepository.createCourse(data);
            return course;
        } catch (error) {
            console.error("Something went wrong at service layer");
            throw{error};
        }
    }
}

module.exports = {
    CourseService,
}