
function shelfBook(title, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(title);
  }
}

// unshelfBook:
// 1) create function that takes in a book's title, and the array in which that book is stored.
// 2) search the array for an object that contains the property title: "Dune"
// 3) remove that object from the array.

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(bookTitle)) {
      shelf.splice(i, 1);
    }
  }
}

// listTitles
// 1) iterate through provided shelf
// 2) add title of each book to array called titles

function listTitles(shelf) {
  var shelfTitles = "";
  for (var i = 0; i < shelf.length; i++) {
    if (i < shelf.length -1) {
      shelfTitles += shelf[i].title + ", ";
    } else {
      shelfTitles += shelf[i].title;
    }
  }
  return shelfTitles;
}

function searchShelf(shelf, bookTitle) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.includes(bookTitle);
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
