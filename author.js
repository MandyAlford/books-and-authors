var Book = require('./book.js');

class Author {
  constructor(author){
    this.first = author.first;
    this.last = author.last;
    this.books = [];
  }
  write(book){
    this.book = new Book;
    this.books.push(this.book);
    return this.book;
  }
}

module.exports = Author;
