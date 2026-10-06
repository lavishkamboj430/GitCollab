const UserModel = require("../Models/UserModel")
const Bcrypt = require("bcrypt")

const Register = async (req, res) => {
    const { UserName, Password } = req.body

    const isExist = await UserModel.find(UserName)

    if (isExist) {
        return res.status(400).json({
            Success: false,
            Message: "try With Different UserName and Password !"
        })
    }

    const HashPassword = await Bcrypt.hash(Password, 10)

    await UserModel.create(
        {
            UserName: UserName,
            Password: HashPassword
        }
    )

    return res.status(200).json({
        Success: true,
        Message: "User Created Successfully !"
    })

}
module.exports = Register