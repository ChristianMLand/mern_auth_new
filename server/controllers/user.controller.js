const User = require('../models/user.model');

const create = async (req, res) => {
    try {
        req.session.user = await User.create(req.body);
        await req.session.save();
        return res.json(req.session.user);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = { create };