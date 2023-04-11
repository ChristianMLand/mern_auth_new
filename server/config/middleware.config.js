// authenticate middleware would be used for any routes we want to ensure the user is logged in for
module.exports.authenticate = async (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ verified: false });
    }
    next();
}