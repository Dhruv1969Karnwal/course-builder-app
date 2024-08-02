const {CourseRepository} = require("../repositories/index")
const {CrudService} = require("./CrudService")

class CourseService extends CrudService {
    constructor(){
        const courseRepository = new CourseRepository();
        super(courseRepository)
    }

    async getAllCourses(filter){
        try {
            const courses = await this.courseRepository.getAllCourses(filter);
            return courses;
        } catch (error) {
            console.error("Something went wrong at service layer");
            throw{error};
        }
    }

    // async createCourse(data) {
    //     try {
    //         const course = await this.courseRepository.createCourse(data);
    //         return course;
    //     } catch (error) {
    //         console.error("Something went wrong at service layer");
    //         throw{error};
    //     }
    // }
}

module.exports = {
    CourseService,
}