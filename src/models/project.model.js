const mongoose = require('mongoose');

const projectmodel = new mongoose.Schema({
    trail: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },
    old:{
        type: Boolean,
        required: false
    },
    participants:[
        {
            type: String,
            required: false
        }
    ]
}, {
    versionKey: false
})

mongoose.model('project', projectmodel);