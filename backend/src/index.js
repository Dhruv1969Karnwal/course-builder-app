const express = require("express");
const bodyParser = require("body-parser")
const {PORT} = require("../src/config/serverConfig")
const {connectToMongoDB} = require("../src/config/database")

const setUpAndStartServer = async () => {
    const app = express();

    connectToMongoDB();

    // configures Middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.listen(PORT, () => {
        console.log(`Server is running at Port No. ${PORT}`);
        // console.log(process);
    })
}

setUpAndStartServer();
