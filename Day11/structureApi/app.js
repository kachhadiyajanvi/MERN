import express from "express"
import "dotenv/config"
import userRoute from "./routes/user.js"
import productRoute from "./routes/product.js"

const PORT = process.env.PORT || 1200

const app = express()
app.use(express.json())

app.use('/user', userRoute)
app.use('/products', productRoute)

app.listen(PORT, ()=>console.log(`server started at http://localhost:${PORT}`))