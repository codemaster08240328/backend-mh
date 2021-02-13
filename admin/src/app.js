const express = require("express")
const bodyParser = require("body-parser")
const {
  apiRoutes,
} = require("./routes")

const app = express()
app.use(bodyParser.json({limit: "10mb"}))
apiRoutes(app)

module.exports = app
