require("dotenv").config()

const app = require("./app")

const ConnectDB = require("./ConnectDB/ConnectDB")

const Port = process.env.PORT || 3000

ConnectDB()

app.listen(Port, () => {
    console.log(`Server Running on Port ${Port}`)
})