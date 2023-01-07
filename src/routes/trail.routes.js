const express = require('express');
const trailRouter = express.Router();

const{
    getCityTrail,
    getZipcodeTrail,
    makeTrail,
    getIdTrail,
    addProjectTrail,
    patchTrail
}= require("../controllers/trail.controller")


trailRouter.post('/api/trail', makeTrail);
trailRouter.get('/api/zipcodeTrail', getZipcodeTrail);
trailRouter.get('/api/cityTrail', getCityTrail);
trailRouter.get('/api/idTrail',getIdTrail)
trailRouter.patch('/api/trail', patchTrail)
trailRouter.patch('/api/addProjectTrail', addProjectTrail)

module.exports = trailRouter;