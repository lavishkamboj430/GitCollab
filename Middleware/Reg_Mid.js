const Joi = require("joi")

const Reg_Mid = (req,res,next)=>
{
    const Schema = Joi.object(
        {
            UserName:Joi.string().min(4).max(25).required(),
            Password:Joi.string().min(8).max(25).required()
        }
    )

    const {error} = Schema.validate(req.body)

    if(error)
    {
        return {
            Success:false,
            Message:error.details[0].message
        }
    }

    next()

}

module.exports = Reg_Mid