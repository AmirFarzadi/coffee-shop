const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',     
    password: '', 
    database: 'coffeeshop' 
});

// اتصال به دیتابیس
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database.', err.message);
        return;
    }
    console.log('Connented to database...');
});

module.exports = db;
