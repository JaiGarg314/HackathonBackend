const mongoose = require('mongoose');
const projectmodel = mongoose.model('project');

async function makeProject(req, res){
    const { trail,host,date,participants, old} = req.body;
    try{
        var myId = mongoose.Types.ObjectId()

        await projectmodel.create({ 
            _id: myId,
            trail: String(trail), 
            host: String(host), 
            date: String(date),
            old: old,
            participants: participants,
        })
        return res.json(myId)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}

async function getProject(req, res){
    const {trail} = req.query;
    try{
        var query = {trail: trail}
        project = await projectmodel.find(query)
        return res.send(project)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
async function addProjectParticipants(req, res){
    const {_id, participants} = req.body;
    try{
        var query = {_id: _id}
        project = await projectmodel.findOne(query)
        project.participants = project.participants.concat(participants)
        await project.save();
        return res.send(project)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
async function updateProjectStatus(req, res){
    const {_id} = req.body;
    try{
        var query = {_id: _id}
        project = await projectmodel.findOne(query)
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if(project.date<today){
            project.old = true
        }
        else{
            project.old = false
        }
        await project.save();
        return res.send(project)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}
async function patchProject(req, res){
    const {_id} = req.body;
    try{
        var query = {_id: _id}
        project = await projectmodel.findOne(query)
        if(req.body.trail != undefined){
            project.trail = req.body.trail
        }
        if(req.body.host != undefined){
            project.host = req.body.host
        }
        if(req.body.date != undefined){
            project.date = req.body.date
        }
        if(req.body.old != undefined){
            project.old = req.body.old
        }
        if(req.body.participants != undefined){
            project.participants = req.body.participants
        }

        await project.save();
        return res.send(project)
    }
    catch(err){
        console.log(err)
        res.status(422).send({ error: err.message })
    }
}

module.exports = {
    patchProject,
    addProjectParticipants,
    getProject,
    updateProjectStatus,
    makeProject,
}