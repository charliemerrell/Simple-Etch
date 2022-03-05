const express = require("express");
const authenticate = require("./middleware/authenticate");
const db = require("./db");
const {
    cardRipeAt,
    getValuesAfterMark,
    PROGRESS_FOR_COMPLETION,
} = require("./cardUtils");

const router = express.Router();
router.use(authenticate);

router.get("/", (req, res) => {
    if (req.query.ripe) {
        db.all(
            `SELECT id, question, answer, progress, ripe FROM Cards 
            WHERE ripe <= ? 
            AND progress < ?`,
            [Date.now(), PROGRESS_FOR_COMPLETION],
            (err, rows) => {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.json(rows);
                }
            }
        );
    } else {
        db.all(
            "SELECT id, question, answer, progress, ripe FROM Cards",
            (err, rows) => {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.json(rows);
                }
            }
        );
    }
});

router.post("/", (req, res) => {
    const { question, answer } = req.body;
    if (question && answer) {
        const progress = 0;
        const ripe = cardRipeAt(progress);
        db.run(
            "INSERT INTO Cards(question, answer, progress, ripe) VALUES(?, ?, ?, ?)",
            [question, answer, progress, ripe],
            (err) => {
                if (err) {
                    console.error(err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(204);
                }
            }
        );
    } else {
        res.sendStatus(400);
    }
});

router.post("/:id/answers", (req, res) => {
    db.get(
        "SELECT id, question, answer, progress, ripe FROM Cards WHERE id = ?",
        req.params.id,
        (err, card) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
            } else if (!card) {
                res.sendStatus(404);
            } else {
                const [newProgress, newRipe] = getValuesAfterMark(
                    card.progress,
                    req.body.correct
                );
                db.run(
                    "UPDATE Cards SET progress = ?, ripe = ? WHERE id = ?",
                    [newProgress, newRipe, req.params.id],
                    (err) => {
                        if (err) {
                            console.error(err);
                            res.sendStatus(500);
                        } else {
                            res.sendStatus(204);
                        }
                    }
                );
            }
        }
    );
});

module.exports = router;
