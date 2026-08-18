import express from 'express'
import 'dotenv/config'
const PORT = process.env.PORT || 1200

const app = express()

app.get("/",(req,res)=>{
    res.send("Express get api called")
})

app.get("/course/:id",(req,res)=>{
    let pattern = /^\d+$/
    if(pattern.test(req.params.id)){
        res.send(req.params)
    }else res.send("ID should be numeric.")
})

app.listen(PORT, ()=>console.log(`Server started at http://localhost:${PORT}`))