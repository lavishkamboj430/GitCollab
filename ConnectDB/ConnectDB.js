require("dotenv").config()
const mongoose = require("mongoose")

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to Db")
    } catch (error) {
        console.log("Unable To Connect With DB")
    }
}
module.exports = ConnectDB