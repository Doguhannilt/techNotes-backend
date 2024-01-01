const User = require('../models/User')
const Note = require('../models/Note')

const asynchandler = require('express-async-handler')
const bcrypt = require('bcrypt')


// @desc get all user
// @route get /users
// @access Private

const getAllUsers = asynchandler(async ( req,res) => {
    const users = await User.find().select('-password').lean()
    if (!users?.length) {
        return res.status(400).json({message: 'No Users Found'})
    }
    res.json(users)
})

// @desc create a new user
// @route POST /users
// @access Private

const createNewUser = asynchandler(async ( req,res) => {
    const { username, password, roles} = req.body

    // Confirm data
    if(!username || !password || !Array.isArray(roles) || !roles.length){
        return res.status(400).json({message: "All field are required"})
    }

    // Check for duplicate
    const duplicate = await User.findOne({ username}).lean().exec()
    if(duplicate){
        return res.status(400).json({message: "Duplicate username"})
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const userObject = {username, "password": hashedPwd, roles}

    // Create and store new user

    const user = await User.create(userObject)

    if(user){
        res.status(201).json({message: 'New user created'})
    }else{
        res.status(400).json({message: 'Invalid user data received'})
    }
})

// @desc update a new user
// @route PATCH /users
// @access Private

const updateUser = asynchandler(async ( req,res) => {
    const { id, username, roles, active, password} = req.body

    if(!id || !username || !Array.isArray(roles)||!roles.length || typeof active !== 'boolean'){
        return res.status(400).json({message: "All fields are required"})
    }
        const user = await User.findById(id).exec()

        if(!user) {
            return res.status(400).json({message: 'User not found'})
        }

        // duplicate
        const duplicate = await user.findOne({username}).lean().exec()
        // Allow updates to the original user
        if(duplicate && duplicate?._id.toString()!== id){
            return res.status(409).json({message: 'Duplicate username'})
        }
        user.username = username
        user.roles = roles
        user.active = active

        if(password){
            // Hash password
            user.password = await bcrypt.hash(password,10) //salt round
        }
        const updatedUser = await user.save()
        res.json({message: `${updatedUser.username} updated`})
})

// @desc delete a new user
// @route DELETE /users
// @access Private

const deleteUser = asynchandler(async ( req,res) => {
        const {id} = req.body
        if (!id) {
            return res.status(400).json({message: 'User ID Required'})
        }
        const notes = await Note.findOne({ user: id}).lean().exec()
        if(notes?.length){
            return res.status(400).json({message: 'User has assigned noted'})
        }
        const user = await User.findById(id).exec()
        if(!user){
            return res.status(400).json({message: 'User not found'})
        }
        const result = await user.deleteOne()
        const reply = `Username  ${result.username} with ID ${result._id} deleted`

        res.json(reply)
})

module.exports = {
    getAllUsers,
    createNewUser,
    deleteUser,
    updateUser
}