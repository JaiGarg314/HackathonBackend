const mongoose = require('mongoose');
const usermodel = mongoose.model('user');

async function makeUser(req, res){
    const { email,password,username} = req.body;
    try{
        var myId = mongoose.Types.ObjectId()

        await usermodel.create({ 
            _id: myId,
            email: String(email), 
            password: String(password), 
            username: String(username)
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

module.exports = {
    makeUser,
    getUser
}