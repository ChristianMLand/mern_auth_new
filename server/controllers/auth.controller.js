const { tryLogin } = require("../services/user.services");

const handleGetLoggedUser = (req, res) => res.json(req.session.user);

const handleLogin = async (req, res) => {
    const [user, error] = await tryLogin(req.body);
    if (error) return res.status(401).json(error);
    req.session.user = user;
    await req.session.save();
    return res.json(user);
}

const handleLogout = (req, res) => {
    req.session.destroy();
    return res.json({ message: "success" });
}

module.exports = { handleLogin, handleLogout, handleGetLoggedUser };