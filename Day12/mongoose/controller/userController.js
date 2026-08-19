import User from '../model/userModel.js'

const getUser = async (req,res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

const postUser = async(req,res) =>{
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

const getUserById = async (req,res) => {
    try{
        const users = await User.findById(req.params.id)
        res.status(200).json(users)
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

export {getUser, postUser, getUserById}