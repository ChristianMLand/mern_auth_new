const express = require("express");
const AuthController = require('../controllers/auth.controller');
const { authenticate } = require("../config/middleware.config");
// authenticate middleware would be used for any routes we want to ensure the user is logged in for
const authRouter = express.Router();
authRouter.post('/', AuthController.handleLogin);
authRouter.get('/', authenticate, AuthController.handleGetLoggedUser);
authRouter.delete('/', authenticate, AuthController.handleLogout);

module.exports = { authRouter };