const express = require('express');
const userRouter = express.Router();
const { registerUser, loginUser, getMe } = require('../controller/UserController');

const { protect } = require('../middleware/AuthMiddleware');

userRouter.post('/', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/me', protect, getMe);

module.exports = userRouter;