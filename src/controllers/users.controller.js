const mongoose = require('mongoose');
const usermodel = mongoose.model('user');

async function user(req, res){
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

module.exports = {
    user
}