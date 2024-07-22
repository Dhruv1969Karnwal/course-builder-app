const express = require("express");
const {PORT} = require("../src/config/serverConfig")

const setUpAndStartServer = async () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server is running at Port No. ${PORT}`);
        // console.log(process);
    })
}

setUpAndStartServer();
