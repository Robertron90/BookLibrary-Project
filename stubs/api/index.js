const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

let books = null;

const loadJson = (filepath, encoding = "utf8") =>
  JSON.parse(
    fs.readFileSync(path.resolve(__dirname, `${filepath}.json`), { encoding })
  );

router.get("/books", (req, res) => {
  if (books === null) books = loadJson("./bookData");
  res.status(200).send(books);
});

router.put("/books/:bookId", (req, res) => {
  const { bookId } = req.params;
  const { shelf } = req.body;
  books["books"] = books["books"].map((book) =>
    bookId !== book.id ? book : { ...book, shelf: shelf }
  );
  res.status(200).send(books);
});

module.exports = router;
module.exports.books = books;
