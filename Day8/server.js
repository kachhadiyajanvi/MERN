import http from "http"
import "dotenv/config"
const port = process.env.PORT || 1100
const server = http.createServer((req,res)=>{
    res.writeHead(201,{'content-type':"text/html"})
    res.write(JSON.stringify({id:1,'name':"Ram",isActive:true}))
    res.end()
})

server.listen(port,()=>console.log(`server Started at http://localhost:${port}`))