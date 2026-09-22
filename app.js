const express = require("express")
const app = express()
const Cors = require("cors")
const Route = require("./Routes/Routes")


app.use(express.json())
app.use(Cors())
app.use("/Api",Route)

module.exports = app
