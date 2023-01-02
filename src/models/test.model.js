const mongoose = require('mongoose');

const test = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
})

mongoose.model('test', test);