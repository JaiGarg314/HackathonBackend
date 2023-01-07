const express = require('express');
const trailRouter = express.Router();

const{
    getCityTrail,
    getZipcodeTrail,
    makeTrail
}= require("../controllers/trail.controller")

trailRouter.post('/api/trail', makeTrail);
trailRouter.get('/api/zipcodeTrail', getZipcodeTrail);
trailRouter.get('/api/cityTrail', getCityTrail);

module.exports = trailRouter;