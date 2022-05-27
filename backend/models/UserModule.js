const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    suename: {
        type: String,
        required: [true, 'Please enter your surname']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your password'],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
