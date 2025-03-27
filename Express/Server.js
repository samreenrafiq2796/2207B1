var exp = require("express");
var r = require("./Route/router");
require("dotenv").config();

let port_no = process.env.PORT
let app = exp()
app.use("/",r)


app.listen(port_no,()=>{
    console.log(`Server Started at http://localhost:${port_no}`)
});