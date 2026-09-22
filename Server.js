require("dotenv").config()
const app = require("./app")
const connectDB = require("./config/db")
const Port = process.env.Port || 3005

connectDB()

app.listen(Port, () => {
    console.log(`Server Running on Port ${Port}`)
})