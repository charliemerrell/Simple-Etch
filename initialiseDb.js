const db = require("./db");

function initialiseDb() {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS Cards (
                id INTEGER PRIMARY KEY,
                question TEXT NOT NULL,
                answer TEXT NOT NULL,
                progress INTEGER NOT NULL,
                ripe INTEGER NOT NULL
            );
        `);
    });
}

module.exports = initialiseDb;
