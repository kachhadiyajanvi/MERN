import http from "http"
import "dotenv/config"
import fs from "fs"
const port = process.env.PORT || 1100
const server = http.createServer((req,res)=>{
    if(req.url == '/')
        res.end('base path')
    else if(req.url == '/about'){
        fs.readFile("about.html","utf-8",(err,data)=>{
            if(err) throw err
            res.write(data)
            res.end()
        })
    }
})

server.listen(port,()=>console.log(`server Started at http://localhost:${port}`))