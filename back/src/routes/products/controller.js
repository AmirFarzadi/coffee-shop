const controller = require("./../controller");
const db = require("../../../config/database");

module.exports = new (class extends controller {
  getProducts(req, res) {
    let q = "select * from products";
    const { category } = req.query;
    if (category && category != "null") {
      q +=
        " WHERE products.category_id = (SELECT categories.category_id FROM categories WHERE categories.slug = ?)";
    }
    db.query(q, [category], (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error fetching products", error: err });
      }
      res.json(result);
    });
  }

  getProductDeatil(req, res) {
    const product_id = parseInt(req.params.id);
    const q = "SELECT * FROM products WHERE products.product_id = ?";
    db.query(q, [product_id], (err, product) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error fetching product", error: err });
      }
      res.json(product);
    });
  }
})();
