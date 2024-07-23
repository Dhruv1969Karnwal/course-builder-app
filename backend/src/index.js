const express = require("express");
const bodyParser = require("body-parser")
const {PORT} = require("../src/config/serverConfig")
const {connectToMongoDB} = require("../src/config/database")
const {CourseRepository} = require("../src/repositories/index")

const setUpAndStartServer = async () => {
    const app = express();

    connectToMongoDB();

    // configures Middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT, async () => {
        console.log(`Server is running at Port No. ${PORT}`);
        // console.log(process)

        // To Check if the course repository is working properly or not

        // const repo = new CourseRepository();
        // const course = await repo.deleteCourse("669fe7cad2d3cfee47515d21")

        // console.log(course);

    })
}

setUpAndStartServer();
