function authenticate(req, res, next) {
    const authHeader = req.get("Authorization");
    const password = authHeader?.split(" ")[1];
    if (password === process.env.PASSWORD) {
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = authenticate;
