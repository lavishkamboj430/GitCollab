const express = require("express")
const Route = express.Router()

//Middleware

const Reg_Mid = require("../Middleware/Reg_Mid")
const Login_Mid = require("../Middleware/Login_Mid")

//Controller

const Register = require("../Controllers/Register")
const Login = require("../Controllers/Login")

//Register

Route.post("/Register", Reg_Mid, Register)

//Login 

Route.post("/Login", Login_Mid, Login)



module.exports = Route