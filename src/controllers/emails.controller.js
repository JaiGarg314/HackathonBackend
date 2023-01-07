const mongoose = require('mongoose');
const emailModel = mongoose.model('cityemail');

async function makeEmail(req, res){
    const {email, city} = req.body;
    try{
        var myId = mongoose.Types.ObjectId()

        await emailModel.create({ 
            _id: myId,
            email: String(email), 
            city: String(city), 
        })
        return res.json(myId)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}

async function getEmail(req, res){
    const {city} = req.query;
    try{
        var query = {city: city}
        emails = await emailModel.findOne(query)
        return res.json(emails.email)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}

module.exports = {
    makeEmail,
    getEmail
}