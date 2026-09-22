require("dotenv").config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to mongoDb Success");
    }
    catch (err) {
        console.log("Error occured while Connecting Db")
    }
}
module.exports = connectDB;