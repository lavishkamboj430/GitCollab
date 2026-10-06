const express = require("express")
const Route = require("./Routes/Routes")
const Cors = require("cors")
const CookieParser = require("cookie-parser")
const app = express()

app.use(express.json())

app.use(Cors(
    {
        origin: "*"
    }
))

app.use(CookieParser())

app.use("/Api", Route)

module.exports = app