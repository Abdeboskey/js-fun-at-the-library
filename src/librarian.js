class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patron, isMorning) {
    if (isMorning) {
      return `Good morning, ${patron}!`;
    } else {
      return `Hello, ${patron}!`;
    }
  }

  findBook(bookName) {
    var fantasyShelf = this.library.shelves.fantasy;
    var fictionShelf = this.library.shelves.fiction;
    var nonFictionShelf = this.library.shelves.nonFiction;
    var notification = "";
    function lookForBook(shelf) {
      for (var i = 0; i < shelf.length; i++) {
        if (shelf[i].title.includes(bookName)) {
          shelf.splice(i, 1);
          notification += "got it";
        }
      }
    }
    lookForBook(fantasyShelf);
    lookForBook(fictionShelf);
    lookForBook(nonFictionShelf);
    if (notification) {
      return `Yes, we have ${bookName}`;
    } else {
      return `Sorry, we do not have ${bookName}`;
    }
  }

  calculateLateFee(daysLate) {
    var fee = Math.ceil(daysLate * 0.25);
    return fee;
  }
}


module.exports = Librarian;
