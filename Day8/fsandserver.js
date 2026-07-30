import http from "http"
import "dotenv/config"
import fs from "fs"
const port = process.env.PORT || 1100
const server = http.createServer((req,res)=>{
    res.writeHead(201,{'content-type':"text/html"})
    let data = fs.readFileSync("fs.html","utf-8")
    res.write(data)
    res.end()
})

server.listen(port,()=>console.log(`server Started at http://localhost:${port}`))