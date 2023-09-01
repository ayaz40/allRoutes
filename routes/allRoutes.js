const express = require("express")
const router = express.Router()

const homeRoute = require("./homeRoute")
const aboutRoute = require("./aboutRoute")
const contactRoute = require("./contactRoute")

router.use("/",homeRoute)
router.use("/about",aboutRoute)
router.use("/contact",contactRoute)
module.exports = router

