import express from 'express'
import {getUser, postUser, getUserById} from '../controller/userController.js'

const router = express.Router()

router.get("/", getUser)
router.post("/", postUser)
router.get("/:id",getUserById)

export default router