const express = require('express');
const userRouter = express.Router();

const{
    user,
}= require("../controllers/users.controller")

userRouter.post('/api/user', user);

module.exports = userRouter;