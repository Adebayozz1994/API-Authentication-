function validateBook({ title, author, year }) {
  if (!title || !author || !year) {
    return 'Title, author, and year are required.';
  }
  if (typeof year !== 'number') {
    return 'Year must be a number.';
  }
  return null;
}

module.exports = { validateBook };
