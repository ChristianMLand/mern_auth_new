const { createUser } = require("../services/user.services");

const create = async (req, res) => {
    const [user, error] = await createUser(req.body);
    if (error) return res.status(400).json(error);
    req.session.user = user;
    await req.session.save();
    return res.json(user);
}

module.exports = { create };