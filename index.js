const express = require("express")
const app = express()
app.set("view engine","ejs")
const path = require("path")
require("dotenv").config()
const port = process.env.PORT || 8080
const assets = path.join(__dirname,"./assets")
app.use("/css",express.static(path.join(assets,"css")))
app.use("/img",express.static(path.join(assets,"img")))
const allRouter = require("./routes/allRoutes")
app.use(allRouter)
app.listen(port,()=>{
    console.log(`server connection http://localhost:${port}`)
})