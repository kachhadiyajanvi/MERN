import express from "express"
import { getProduct, postProduct } from "../Controller/productController.js"

const router = express.Router()

router.get("/", getProduct)
router.post("/", postProduct)

export default router