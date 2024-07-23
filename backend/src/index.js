const express = require("express");
const bodyParser = require("body-parser")
const {PORT} = require("../src/config/serverConfig")
const {connectToMongoDB} = require("../src/config/database")
const {Course} = require("../src/models/Course");

const setUpAndStartServer = async () => {
    const app = express();

    connectToMongoDB();

    // configures Middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT, async () => {
        console.log(`Server is running at Port No. ${PORT}`);
        // console.log(process)

        // To Check if the model is working properly or not
        
        // const result = await Course.create({
        //     "title": "MongoDB",
        //     "description": "about MongoDB",
        //     "createdBy":"dh",
        //     "category":"dh"
        // });

        // console.log(result);

    })
}

setUpAndStartServer();
