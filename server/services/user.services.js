const User = require('../models/user.model');
const serviceWrapper = require("../util/serviceWrapper");

const tryLogin = serviceWrapper(
    async data => await User.checkLogin(data)
);

const createUser = serviceWrapper(
    async data => await User.create(data)
);

module.exports = { tryLogin, createUser }