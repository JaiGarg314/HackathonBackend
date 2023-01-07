const mongoose = require('mongoose');
const usermodel = mongoose.model('user');

async function makeUser(req, res){
    const { email,password,username,firstName,lastName} = req.body;
    try{
        var myId = mongoose.Types.ObjectId()

        await usermodel.create({ 
            _id: myId,
            email: String(email), 
            password: String(password), 
            username: String(username),
            firstName: String(firstName),
            lastName: String(lastName)
        })
        return res.json(myId)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}

async function getUser(req, res){
    const {username} = req.query;
    try{
        var query = {username: username}
        user = await usermodel.findOne(query)
        return res.send(user)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
async function patchUser(req, res){
    const {_id} = req.body;
    try{
        var query = {_id: _id}
        user = await usermodel.findOne(query)
        console.log(user)
        if(req.body.email != undefined){
            user.email = req.body.email
        }
        if(req.body.username != undefined){
            user.username = req.body.username
        }
        if(req.body.firstName != undefined){
            user.firstName = req.body.firstName
        }
        if(req.body.lastName != undefined){
            user.lastName = req.body.lastName
        }
        if(req.body.password != undefined){
            user.password = req.body.password
        }
        await user.save();
        return res.send(user)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
module.exports = {
    patchUser,
    makeUser,
    getUser
}