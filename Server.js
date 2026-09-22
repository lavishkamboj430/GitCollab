require("dotenv").config()
const app = require("./app")
const Port = process.env.Port||3005


app.listen(Port,()=>
{
    console.log(`Server Running on Port ${Port}`)
})