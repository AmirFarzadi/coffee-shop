const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

app.get("/api/products", (req, res) => {
  let q = "select * from products";

  const { category } = req.query;
  console.log(category);
  if (category) {
    q += ` WHERE products.category_id = (SELECT categories.category_id FROM categories WHERE categories.slug = '${category}')`;
  }
  db.query(q, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error fetching products", error: err });
    }
    res.json(result);
  });
});

app.get("/api/product/:id", (req, res) => {
  db.query(
    `
    SELECT * FROM products WHERE products.product_id = ${parseInt(
      req.params.id
    )}
    `,
    (err, product) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error fetching products", error: err });
      }
      res.json(product);
    }
  );
});

app.get("/api/category", (req, res) => {
  db.query(
    `
    SELECT * FROM products WHERE products.category_id = (SELECT categories.category_id FROM categories WHERE categories.slug = '${req.query.categorySlug}')
    `,
    (err, products) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error fetching products", error: err });
      }
      res.json(products);
    }
  );
});

app.get("/api/categories", (req, res) => {
  db.query("select * from categories", (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error fetching products", error: err });
    }
    res.json(result);
  });
});

// app.post("/api/products", [
//   body("email", "email most be valid").isEmail(),
//   body("firstName", "first name cant be empty").notEmpty(),
//   body("lastName", "last name cant be empty").notEmpty(),
// ] , (req, res) => {
//   const errors = validationResult(req)
//   if(!errors.isEmpty()){
//     return res.status(400).json({data : null , errors : errors.array() , message : 'validation error'})
//   }
// }
// );

module.exports = app;
