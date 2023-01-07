const express = require('express');
const userRouter = express.Router();

const{
    makeUser,
    getUser
}= require("../controllers/users.controller")

userRouter.post('/api/user', makeUser);
userRouter.get('/api/user', getUser);


module.exports = userRouter;