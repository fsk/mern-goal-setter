const asyncHandler = require('express-async-handler');

const User = require('../models/UserModule');

// @desc    Register new User
// @route   POST /api/users/
// @access  Public
const registerUser = asyncHandler( async (req, res) => {
    res.json({message: "Register user"});
})

// @desc    Authenticate a User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler( async (req, res) => {
    res.json({message: "Login user"});
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler( async (req, res) => {
    res.json({message: "User data display"});
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}