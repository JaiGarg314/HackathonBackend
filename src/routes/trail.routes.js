const express = require('express');
const trailRouter = express.Router();

const{
    getCityTrail,
    getZipcodeTrail,
    makeTrail,
    addHostTrail,
    patchTrail
}= require("../controllers/trail.controller")

trailRouter.post('/api/trail', makeTrail);
trailRouter.get('/api/zipcodeTrail', getZipcodeTrail);
trailRouter.get('/api/cityTrail', getCityTrail);
trailRouter.patch('/api/trail', patchTrail)
trailRouter.patch('/api/addHostTrail', addHostTrail)

module.exports = trailRouter;