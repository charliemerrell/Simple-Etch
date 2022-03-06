const express = require("express");
require("dotenv").config();
const initialiseDb = require("./initialiseDb");
const seedDbForDev = require("./seedDbForDev");
const cardRouter = require("./cardRouter");

const db = initialiseDb();
const app = express();

if (process.env.NODE_ENV === "production") {
    const cors = require("cors");
    const hsts = require("hsts");
    app.use(
        hsts({
            maxAge: 15552000,
        })
    );
    const corsOptions = {
        origin: process.env.CLIENT_URL,
        optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
} else if (process.env.NODE_ENV === "development") {
    seedDbForDev(db);
}
app.use(express.json());

app.post("/api/login", (req, res) => {
    res.send("hello");
});

app.use("/api/cards", cardRouter);

module.exports = app;
