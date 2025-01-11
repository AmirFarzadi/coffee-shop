const controller = require("../controller");
const db = require("../../../config/database");

module.exports = new (class extends controller {
  categories(req, res) {
    db.query("SELECT * FROM categories", (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error fetching products", error: err });
      }
      res.json(result);   
    });
  }
})();
