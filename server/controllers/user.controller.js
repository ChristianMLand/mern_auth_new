const User = require('../models/user.model');

module.exports = {
    create: async (req, res) => {
        try {
            req.session.user = await User.create(req.body);
            await req.session.save();
            return res.json(req.session.user);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    login: async (req, res) => {
        try {
            req.session.user = await User.checkLogin(req.body);
            await req.session.save();
            return res.json(req.session.user);
        } catch (error) {
            return res.status(401).json(error);
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.json({ message: "success" });
    }
};