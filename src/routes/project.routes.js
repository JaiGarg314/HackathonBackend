const express = require('express');
const projectRouter = express.Router();

const{
    patchProject,
    addProjectParticipants,
    getProject,
    updateProjectStatus,
    makeProject,
}= require("../controllers/project.controller")

projectRouter.post('/api/project', makeProject);
projectRouter.get('/api/project', getProject);
projectRouter.patch('/api/updateProjectStatus', updateProjectStatus);
projectRouter.patch('/api/addProjectParticipants', addProjectParticipants)
projectRouter.patch('/api/project', patchProject)

module.exports = projectRouter;