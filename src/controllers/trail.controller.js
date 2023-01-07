const mongoose = require('mongoose');
const trailmodel = mongoose.model('trail');

async function makeTrail(req, res){
    const {name,zipcode,distance, city,state,longitude,latitude,condition, reviews} = req.body;
    try{
        var myId = mongoose.Types.ObjectId()

        await trailmodel.create({ 
            _id: myId,
            name: String(name), 
            zipcode: String(zipcode), 
            city: String(city),
            state: String(state),
            longitude: String(longitude),
            latitude: String(latitude),
            condition: String(condition),
            distance: distance,
            host: "", 
            users: [],
            reviews: reviews
        })
        return res.json(myId)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
async function getIdTrail(req, res){
    const {_id} = req.query;
    try{
        var query = {_id: _id}
        trails = await trailmodel.find(query)
        return res.json(trails)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
async function addTrailReviews(req, res){
    const {_id, userid, reviews} = req.body;
    try{
        var query = {_id: _id}
        trail = await trailmodel.findOne(query)
        trail.reviews = trail.reviews.concat(reviews)
        trail.users = trail.users.concat(userid)
        await trail.save();
        return res.json(trail)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
async function getCityTrail(req, res){
    const {city} = req.query;
    try{
        var query = {city: city}
        trails = await trailmodel.find(query)
        return res.json(trails)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
async function getZipcodeTrail(req, res){
    const {zipcode} = req.query;
    try{
        var query = {zipcode: zipcode}
        trails = await trailmodel.find(query)
        return res.json(trails)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}

async function addProjectTrail(req, res){
    const {project, _id} = req.body;
    try{
        var query = {_id: _id}
        trail = await trailmodel.findOne(query)
        trail.project = project
        trail.save()
        return res.json(trail)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}

async function patchTrail(req, res){
    const {_id} = req.body;
    try{
        var query = {_id: _id}
        trail = await trailmodel.findOne(query)
        if(req.body.host != undefined){
            trail.host = req.body.host
        }
        if(req.body.distance != undefined){
            trail.distance = req.body.distance
        }
        if(req.body.project != undefined){
            trail.project = req.body.project
        }
        if(req.body.name != undefined){
            trail.name = req.body.name
        }
        if(req.body.zipcode != undefined){
            trail.zipcode = req.body.zipcode
        }
        if(req.body.city != undefined){
            trail.city = req.body.city
        }
        if(req.body.state != undefined){
            trail.state = req.body.state
        }
        if(req.body.longitude != undefined){
            trail.longitude = req.body.longitude
        }
        if(req.body.latitude != undefined){
            trail.latitude = req.body.latitude
        }
        if(req.body.condition != undefined){
            trail.condition = req.body.condition
        }
        if(req.body.reviews != undefined){
            trail.reviews = req.body.reviews
        }
        await trail.save();
        return res.json(trail)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}

module.exports = {
    makeTrail,
    getCityTrail,
    addProjectTrail,
    patchTrail,
    getIdTrail,
    addTrailReviews,
    getZipcodeTrail
}