const { Double, Int32 } = require('mongodb');
const mongoose = require('mongoose');

const trailmodel = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    host: {
        type: String,
        required: false
    },
    zipcode: {
        type: Number,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    },
    condition: {
        type: String,
        required: false
    },
    reviews:[
        {
            type: String,
            required: false
        }
    ]
}, {
    versionKey: false
})

mongoose.model('trail', trailmodel);