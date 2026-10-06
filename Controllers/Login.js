const Bcrypt = require("bcrypt")
const UserModel = require("../Models/UserModel")
const { Generate_Token } = require("../GenerateToken/GenerateToken")

const Login = async (req, res) => {

    const { UserName, Password } = req.body

    const isExist = UserModel.find(UserName)

    if (!isExist) {
        return res.status(400).json(
            {
                Success: false,
                Message: "Enter valid UserName and Password !"
            }
        )
    }

    const isValid = await Bcrypt.compare(Password, isExist.Password)

    if (!isValid) {
        return res.status(400).json(
            {
                Success: false,
                Message: "Enter valid UserName and Password !"
            }
        )
    }

    const Token = Generate_Token(UserName, isExist.Role)

    res.cookie("Token", Token, {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });

    res.status(200).json({
        Success: true,
        Message: "Login Successfully!"
    })

}

module.exports = Login