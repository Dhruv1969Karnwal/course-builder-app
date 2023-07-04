import app from './app.js'
import {connectToMongoDB} from "./config/database.js"

connectToMongoDB()

app.listen(process.env.PORT , () => {
console.log(`Server is working on port: ${process.env.PORT}`)
})