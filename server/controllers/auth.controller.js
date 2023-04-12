const { tryLogin } = require("../services/user.services");

const getLoggedUser = (req, res) => res.json(req.session.user);

const login = async (req, res) => {
    const [user, error] = await tryLogin(req.body);
    if (error) return res.status(401).json(error);
    req.session.user = user;
    await req.session.save();
    return res.json(user);
}

const logout = (req, res) => {
    req.session.destroy();
    return res.json({ message: "success" });
}

module.exports = { login, logout, getLoggedUser };