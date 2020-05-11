
function createLibrary(libraryName) {
  return { name: libraryName,
           shelves: { fantasy: [],
                      fiction: [],
                      nonFiction: []
                    }
         };
}

function addBook(library, book) {
  if (book.genre === "fantasy") { library.shelves.fantasy.push(book); }
  if (book.genre === "fiction") { library.shelves.fiction.push(book); }
  if (book.genre === "nonFiction") { library.shelves.nonFiction.push(book); }
}

function checkoutBook(library, book) {
  var notification = "";
  function lookForBook(shelf) {
    for (var i = 0; i < shelf.length; i++) {
      if (shelf[i].title.includes(book)) {
        shelf.splice(i, 1);
        notification += "got it";
      }
    }
  }
  lookForBook(library.shelves.fantasy);
  lookForBook(library.shelves.fiction);
  lookForBook(library.shelves.nonFiction);
  if (notification) {
    return `You have now checked out ${book} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
  }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
