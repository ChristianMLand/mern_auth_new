const { createUser } = require("../services/user.services");

const handleCreateUser = async (req, res) => {
    const [user, error] = await createUser(req.body);
    if (error) return res.status(400).json(error);
    // might decide we don't want to login right away
    // and require them to use the login form instead
    // in order to keep the api restful
    req.session.user = user;
    await req.session.save();
    return res.json(user);
}

module.exports = { handleCreateUser };