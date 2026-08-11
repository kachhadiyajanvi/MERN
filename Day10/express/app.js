import express from 'express'
import 'dotenv/config'
const PORT = process.env.PORT || 3000

const server = express()

server.get("/",(req,res)=>{
    res.send("Express get api called")
})

server.get("/course",(req,res)=>{
    res.send(`Welcome to Course:- ${JSON.stringify(req.query)}`)
})

server.get(/^\/institute\/([0-9]+)$/,(req,res)=>{
    const id = req.params[0]
    res.send(`Welcome to institute:- ${id}`)
})  

server.listen(PORT, ()=>console.log(`Server started at http://localhost:${PORT}`))