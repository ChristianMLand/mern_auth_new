const express = require("express");
const AuthController = require('../controllers/auth.controller');
const { authenticate } = require("../config/middleware.config");
// authenticate middleware would be used for any routes we want to ensure the user is logged in for
const authRouter = express.Router();
authRouter.post('/', AuthController.login);
authRouter.get('/', authenticate, AuthController.getLoggedUser);
authRouter.delete('/', authenticate, AuthController.logout);

module.exports = { authRouter };