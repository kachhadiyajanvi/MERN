import express from "express"
const router = express.Router()

router.get("/",(req, res)=>{
    res.send("hello form Route")
})

router.get("/:uid",(req, res)=>{
    res.send(req.params)
})

router.post("/",(req, res)=>{
    res.send("Post request")
})

export default router