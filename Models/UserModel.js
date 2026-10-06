const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        UserName: {
            type: String,
            require: true,
            unique:true
        },
        Password: {
            type: String,
            require: true

        },
        Role:{
            type:String,
            enum:["Student","Admin"],
            default:"Student"
        }
    }
)

const UserModel = mongoose.model("User",UserSchema)

module.exports = UserModel