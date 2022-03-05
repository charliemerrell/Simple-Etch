const express = require("express");
const authenticate = require("./middleware/authenticate");
require("dotenv").config();
const initialiseDb = require("./initialiseDb");

initialiseDb();
const app = express();

if (process.env.NODE_ENV === "development") {
    const cors = require("cors");
    const corsOptions = {
        origin: process.env.CLIENT_URL,
        optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
}
app.use(express.json());

app.post("/api/login", (req, res) => {
    res.send("hello");
});

app.get("/api/cards", authenticate, (req, res) => {
    res.send("lots of cards");
});

module.exports = app;
