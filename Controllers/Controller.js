const UserInfo = async (req, res) => {
    const Data = req.body

    if (!Data) {
        return res.status(400).json(
            {
                Message: "No Data Found"
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