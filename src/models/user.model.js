const mongoose = require('mongoose');

const usermodel = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

mongoose.model('user', usermodel);