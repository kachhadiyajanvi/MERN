import express from "express"
import "dotenv/config"

import userRoute from './routes/userRoute.js'
import connectDB from "./config/dbconnect.js"

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
connectDB(process.env.MONGO_URL)

app.use('/user', userRoute)

app.listen(PORT, ()=>console.log(`server started at http://localhost:${PORT}`))