const User = require('../models/user.model');

const hookWrapper = func => {
    const inner = async data => {
        let result, error;
        try {
            result = await func(data);
        } catch (err) {
            error = err;
        } finally {
            return [result, error];
        }
    }
    return inner;
}

const tryLogin = hookWrapper(
    async data => await User.checkLogin(data)
);

const createUser = hookWrapper(
    async data => await User.create(data)
);

module.exports = { tryLogin, createUser }