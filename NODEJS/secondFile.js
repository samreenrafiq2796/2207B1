let server = require("http");
require("dotenv").config();
// npm i child_process
// to open browser automatically
let { exec } = require("child_process")

let port = process.env.PORT;

server.createServer(function(req,res){
    if(req.url === "/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(`<h1>Home Page</h1>
        <ul>
    <li><a href="/c">Go to Contact</a></li>
    <li><a href="/a">Go to About</a></li>

</ul>`)
        res.end()
    }
    else if(req.url === "/a"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(`<h1>About Page</h1>`)
        res.end()
    }
    else if(req.url === "/c"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(`<h1>Contact Page</h1>`)
        res.end()
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.write(`<h1 style='color:red'>Page Not Found</h1>`)
        res.end()
    }
}).listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
    let u = `http://localhost:${port}`;
    if (process.platform === "win32") {
        exec(`start ${u}`)
    }
})
