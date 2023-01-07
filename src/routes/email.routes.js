const express = require('express');
const emailRouter = express.Router();

const{
    makeEmail,
    getEmail,
}= require("../controllers/emails.controller")

emailRouter.post('/api/email', makeEmail);
emailRouter.get('/api/email',getEmail)

module.exports = emailRouter;