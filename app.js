const express = require("express");
const authenticate = require("./middleware/authenticate");
require("dotenv").config();
const db = require("./db");
const initialiseDb = require("./initialiseDb");

initialiseDb();

const app = express();

app.use(express.json());

app.post("/api/login", (req, res) => {
    res.send("hello");
});
app.use(authenticate);
app.get("/api/cards", (req, res) => {
    res.send("lots of cards");
});

module.exports = app;
