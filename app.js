const express = require("express");
const path = require("path");
const authenticate = require("./middleware/authenticate");
require("dotenv").config();
const db = require("./db");
const initialiseDb = require("./initialiseDb");

initialiseDb();

const app = express();

app.use(
    express.static(path.join(__dirname, "etch-client", "dist", "etch-client"))
);

app.use(express.json());

app.post("/api/login", (req, res) => {
    res.send("hello");
});
app.get("/api/cards", authenticate, (req, res) => {
    res.send("lots of cards");
});

module.exports = app;
