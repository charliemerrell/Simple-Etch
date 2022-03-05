const { Buffer } = require("buffer");

function authenticate(req, res, next) {
    const authHeader = req.get("Authorization");
    if (authHeader) {
        const password = Buffer.from(
            authHeader?.split(" ")[1],
            "base64"
        ).toString();
        console.log(password);
        if (password === process.env.PASSWORD) {
            return next();
        }
    }
    res.sendStatus(403);
}

module.exports = authenticate;
