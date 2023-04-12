const express = require("express");
const UserController = require('../controllers/user.controller');

const userRouter = express.Router();
userRouter.post('/', UserController.create);

module.exports = { userRouter };