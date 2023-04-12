const User = require('../models/user.model');

const getLoggedUser = (req, res) => res.json(req.session.user);

const login = async (req, res) => {
    try {
        req.session.user = await User.checkLogin(req.body);
        await req.session.save();
        return res.json(req.session.user);
    } catch (error) {
        return res.status(401).json(error);
    }
}

const logout = (req, res) => {
    req.session.destroy();
    return res.json({ message: "success" });
}

module.exports = { login, logout, getLoggedUser };