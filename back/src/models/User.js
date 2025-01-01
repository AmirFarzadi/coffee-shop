const db = require("../../config/database");

// دستور SQL برای ایجاد جدول
const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

db.query(createUsersTable, (err, results) => {
  if (err) {
    console.error("Error creating users table:", err.message);
    return;
  }
  console.log("Users table created successfully!");
  db.end(); // پایان اتصال
});


