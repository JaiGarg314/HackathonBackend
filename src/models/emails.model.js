const mongoose = require('mongoose');

const emailModel = new mongoose.Schema({
    city: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }
}, {
    versionKey: false
})

mongoose.model('cityemail', emailModel);