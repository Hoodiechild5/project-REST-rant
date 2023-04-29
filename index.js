// Modules and Globals
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
// Initialize the app object.
const app = express();
// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// places.js module
const placesRouter = require("./controllers/places");
app.use("/places", placesRouter);
// Create a homepage route.
app.get("/", function (req, res) {
  // This gets sent to the client
  // (your web browser most likely!)
  res.render("home");
});
//404 error handler
app.get("*", (req, res) => {
  res.render("error404");
});
// Listen for connections.
app.listen(process.env.PORT, function () {
  console.log("I am awake!");
});