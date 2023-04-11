const UserController = require('../controllers/user.controller');
const { authenticate } = require("../config/middleware.config");
// authenticate middleware would be used for any routes we want to ensure the user is logged in for

module.exports = app => {
    app.post('/api/users', UserController.create);
    app.post('/api/auth', UserController.login);
    app.delete('/api/auth', UserController.logout);
};