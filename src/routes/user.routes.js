const express = require('express');
const userRouter = express.Router();

const{
    makeUser,
    patchUser,
    getUser
}= require("../controllers/users.controller")

userRouter.post('/api/user', makeUser);
userRouter.get('/api/user', getUser);
userRouter.patch('/api/user', patchUser)

module.exports = userRouter;