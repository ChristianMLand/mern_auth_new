const User = require('../models/user.model');

const tryLogin = async data => {
    let user, error;
    try {
        user = await User.checkLogin(data);
    } catch (err) {
        error = err;
    } finally {
        return [user, error];
    }
}

const createUser = async data => {
    let user, error;
    try {
        user = await User.create(data);
    } catch (err) {
        error = err;
    } finally {
        return [user, error];
    }
}

module.exports = { tryLogin, createUser }