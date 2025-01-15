const controller = require("./../controller");
const db = require("../../../config/database");

module.exports = new (class extends controller {
  register(req, res) {
    const { firstName , lastName , email, password , phone } = req.body;

    if (!firstName || !lastName || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const checkQuery = `SELECT * FROM users WHERE email = ?`;
    db.query(checkQuery, [email], (err, results) => {
      if (err) {
        debug("Error checking user existence:", err.message);
        return res
          .status(500)
          .json({ error: "Database error while checking user." });
      }

      if (results.length > 0) {
        // اگر ایمیل وجود داشت
        return res.status(400).json({ message: "User already exists." });
      }

      const insertQuery = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
      db.query(insertQuery, [firstName,lastName, email, password, phone], (err, result) => {
        if (err) {
          debug("Error creating user:", err.message);
          return res
            .status(500)
            .json({ error: "Database error while creating user." });
        }
        res
          .status(201)
          .json({ message: "User created successfully", id: result.insertId });
      });
    });
  }
  async login(req, res) {
    res.send("login");
  }
})();
