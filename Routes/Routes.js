const express = require("express")
const Route = express.Router()

const UserInfo = require("../Controllers/Controller")

Route.post("/UserInfo",UserInfo)

module.exports = Route