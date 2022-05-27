const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/UserModule');

// @desc    Register new User
// @route   POST /api/users/
// @access  Public
const registerUser = asyncHandler( async (req, res) => {
    const { name, surname, email, username, password,  } = req.body;

    if(!name || !surname || !email || !username || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    //Check if user exists

    const userExistsEmail = await User.findOne({email});
    const userExistsUsername = await User.findOne({username});

    if(userExistsEmail) {
        res.status(400);
        throw new Error('This email already exists');
    }

    if(userExistsUsername) {
        res.status(400);
        throw new Error('This username already exists');
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create User
    const user = await User.create({
        name,
        surname,
        email,
        username,
        password: hashedPassword,
        token: generateToken(user._id)
    })

    if(user) {
        res.status(201).json({
            message: "User created successfully"
        })
    }else {
        res.status(400)
        throw new Error('Invalid User Error')
    }

    res.json({message: "Register user"});
})

// @desc    Authenticate a User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler( async (req, res) => {

    const { username, password } = req.body;

    // Check for user username
    const user = await User.findOne({username});

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid username or password')
    }

    res.json({message: "Login user"});
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler( async (req, res) => {
    res.json({message: "User data display"});
})


//Generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}




module.exports = {
    registerUser,
    loginUser,
    getMe
}