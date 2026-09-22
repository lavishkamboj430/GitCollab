const studentModel = require("../modals/studentSchemas")
const UserInfo = async (req, res) => {
    const Data = req.body

    if (!Data) {
        return res.status(400).json(
            {
                Message: "No Data Found"
            }
        )
    }

    try {
        await studentModel.create({
            Name: Data.Name,
            Class: Data.Class,
            RollNo: Data.RollNo,
            Section: Data.Section
        })
    } catch (error) {
        return res.status(400).json(
            {
                Message: "Enter Valid Information"
            }
        )
    }



    return res.status(200).json(
        {
            Messgae: "User Info",
            Data: Data
        }
    )
}
module.exports = UserInfo