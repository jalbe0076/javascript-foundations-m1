function issueCard(name, age) {
  var card = {
    name: name,
    age: age, 
    numBooksCheckedOut: 0,
    isChild: false
  }

  if (card.age < 12) {
    card.isChild = true;
  }

  return card;
}

function searchByAuthor(bookCollection, author) {
  var searchedBooks = [];
  for (var i = 0; i < bookCollection.length; i++) {
    if (bookCollection[i].author === author) {
      searchedBooks.push(bookCollection[i]);
    }
  }
  
  if (searchedBooks.length) {
    return searchedBooks;
  } else {
    return 'No book found for search criteria';
  }
}

module.exports = {
  issueCard,
  searchByAuthor
};