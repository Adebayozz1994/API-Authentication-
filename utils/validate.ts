export interface Book {
  title: string;
  author: string;
  year: number;
}

export function validateBook(book: Partial<Book>): string | null {
  const { title, author, year } = book;

  if (!title || !author || year === undefined || year === null) {
    return 'Title, author, and year are required.';
  }

  if (typeof year !== 'number') {
    return 'Year must be a number.';
  }

  return null;
}
