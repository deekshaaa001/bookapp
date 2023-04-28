const Book = require("../models/Book");
const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err)
  }
  if (!books) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return res.status(404).json({ message: "No products found" })
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return res.status(200).json({ books })
};
const getbyId = async (req, res, next) => {
  const id = req.params.id //will return the id which is available in the url
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No book found" })
  }
  return res.status(200).json({ book })

}
const addBook = async (req, res, next) => {
  const { name, author, description, price, image } = req.body
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      image,

    });
    await book.save();
  }
  catch (err) {
    console.log(err);
  }
  if (!book) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return res.status(500).json({ message: "Unable to Add" })
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return res.status(201).json({ book });
};
const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return res.status(200).json({ book });
};
const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getbyId = getbyId;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;