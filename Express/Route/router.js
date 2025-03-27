// Import Controller
let func = require("../Logics_functions/controller")
// Import Express
let express = require("express");
let route = express.Router()
// Define Routes
route.get("/",func.Index)
route.get("/a",func.About);
route.get("/c",func.Contact);

module.exports = route;
