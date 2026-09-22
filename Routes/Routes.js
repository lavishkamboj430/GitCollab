const express = require("express")
const Route = express.Router()

Route.post("/UserInfo",UserInfo)

module.exports = Route