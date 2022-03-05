const initialiseDb = require("./initialiseDb");
const { PROGRESS_FOR_COMPLETION } = require("./cardUtils");

function seedDbForDev(db) {
    console.log("seeding for dev");
    db.serialize(() => {
        db.run("DROP TABLE IF EXISTS Cards");
        initialiseDb();
        db.run(
            "INSERT INTO Cards(question, answer, progress, ripe) VALUES(?, ?, ?, ?)",
            ["Ripe and progress 0", "Just so you know", 0, Date.now() - 1000]
        );
        db.run(
            "INSERT INTO Cards(question, answer, progress, ripe) VALUES(?, ?, ?, ?)",
            ["Unripe and progress 0", "Just so you know", 0, Date.now() + 99999]
        );
        db.run(
            "INSERT INTO Cards(question, answer, progress, ripe) VALUES(?, ?, ?, ?)",
            [
                "Ripe and one from completion",
                "Just so you know",
                PROGRESS_FOR_COMPLETION - 1,
                Date.now() - 1000,
            ]
        );
        db.run(
            "INSERT INTO Cards(question, answer, progress, ripe) VALUES(?, ?, ?, ?)",
            [
                "Should be completed",
                "So shouldn't show",
                PROGRESS_FOR_COMPLETION,
                Date.now() - 1000,
            ]
        );
    });
}

module.exports = seedDbForDev;
