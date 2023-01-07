const mongoose = require('mongoose');
const trailmodel = mongoose.model('trail');

async function makeTrail(req, res){
    const {name,zipcode,city,state,longitude,latitude,condition, reviews} = req.body;
    try{
        await trailmodel.create({ 
            name: String(name), 
            zipcode: String(zipcode), 
            city: String(city),
            state: String(state),
            longitude: String(longitude),
            latitude: String(latitude),
            condition: String(condition),
            reviews: reviews
        })
        return res.json("trail created")
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
        return res.send(trails)
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
        return res.send(trails)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
module.exports = {
    makeTrail,
    getCityTrail,
    getZipcodeTrail
}