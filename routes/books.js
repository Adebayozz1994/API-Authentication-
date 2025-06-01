const express = require('express');
const { books } = require('../data/store');
const { authenticate, authorizeRole } = require('../middleware/auth');
const { validateBook } = require('../utils/validate');

const router = express.Router();

// All routes below require authentication
router.use(authenticate);

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// GET book by ID
router.get('/:id', (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// ADD new book
router.post('/', (req, res) => {
  const error = validateBook(req.body);
  if (error) return res.status(400).json({ message: error });

  const newBook = { id: Date.now(), ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// UPDATE book
router.put('/:id', (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const error = validateBook(req.body);
  if (error) return res.status(400).json({ message: error });

  Object.assign(book, req.body);
  res.json(book);
});

// DELETE book (admin only)
router.delete('/:id', authorizeRole('admin'), (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  const deleted = books.splice(index, 1);
  res.json({ message: 'Book deleted', book: deleted[0] });
});

module.exports = router;
