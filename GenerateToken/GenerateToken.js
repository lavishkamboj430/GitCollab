require("dotenv").config()
const Jwt = require("jsonwebtoken")
let decode = ""
const Generate_Token = (UserName, Role) => {
    return Jwt.sign(
        {
            UserName: UserName,
            Role: Role
        },
        process.env.TOKEN,
        { "expiresIn": "1d" }
    )
}

const Decode_Token = (Token) => {

    try {
        decode = Jwt.decode(Token, process.env.TOKEN)
        return {
            Success: true,
            Decode: decode
        }
    } catch (error) {
        return {
            Success: false,
        }
    }

}

module.exports = { Generate_Token, Decode_Token }