const books = require("./books.json");

function priceOfBook(bookName) {
  let x = 0
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === bookName)
      x = books[i].price

  }
  return x

}

function affordableBooks(budget) {

  let x = []
  for (let i = 0; i < books.length; i++) {
    if (budget >= books[i].price)
      x.push(books[i].title)

  }
  return x
}

function findBookByGenre(genre) {
  let x = []
  for (let i = 0; i < books.length - 1; i++) {
    for (let j = 0; j < books[i].genres.length; j++) {

      if (books[i].genres[j] == genre) {
        x.push(books[i].title)
      }
    }
  }
  return x

}


function groupByGenre() {
  let x = []
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].genres.length; j++) {
      x.push(books[i].genres[j])
    }
  }
  let mySet = new Set(x)
  let myArray = Array.from(mySet)

  return myArray
}

function sortBooksByPrice() {
  for (let i = 0; i < books.length - 1; i++) {
    let j = 0;
    for (j; j < (books.length - i - 1); j++) {
      if ((books[j].price - books[j + 1].price) > 0) {
        let temp = books[j];
        books[j] = books[j + 1];
        books[j + 1] = temp;
      }
    }
  }
  return books;
 }
 


(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }

    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }

    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();
