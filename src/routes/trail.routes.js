const express = require('express');
const trailRouter = express.Router();

const{
    getCityTrail,
    getZipcodeTrail,
    makeTrail,
    getIdTrail,
    addTrailReviews,
    addProjectTrail,
    patchTrail
}= require("../controllers/trail.controller")


trailRouter.post('/api/trail', makeTrail);
trailRouter.get('/api/zipcodeTrail', getZipcodeTrail);
trailRouter.get('/api/cityTrail', getCityTrail);
trailRouter.get('/api/idTrail',getIdTrail)
trailRouter.patch('/api/trail', patchTrail)
trailRouter.patch('/api/addProjectTrail', addProjectTrail)
trailRouter.post('/api/addReviews', addTrailReviews)
module.exports = trailRouter;