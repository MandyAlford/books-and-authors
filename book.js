// var Author = require('./author.js');

class Book {
  constructor(firstName, lastName, title, publicationYear){
    this.author = (firstName + " " + lastName);
    this.title = title;
    this.publicationYear = publicationYear;
  }
}

module.exports = Book;
