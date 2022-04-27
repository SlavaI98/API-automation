const faker = require("faker");

class booksApi {
  get postBook() {
    return cy.request({
      method: "POST",
      url: "https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/books",
      body: {
        title: "title123",
        author: "Slava",
      },
    });
  }
  deleteBook(blabla) {
    return cy.request(
      "DELETE",
      "https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/" +
        blabla
    );
  }
  getBookDeleted(blahblah) {
    return cy.request({
      url:
        "https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/" +
        blahblah,
      failOnStatusCode: false,
    });
  }
  getBook(lalala) {
    return cy.request(
      "https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/" +
        lalala
    );
  }
  updateBook(lololo, aaa, bbb) {
    return cy.request(
      "PUT",
      "https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/" +
        lololo,
      { title: bbb, author: aaa }
    );
  }
  get allBooks() {
    return cy.request(
      "https://f4hatlr72b.execute-api.us-east-1.amazonaws.com/production/books"
    );
  }
  title = "api.book." + faker.datatype.number();
}
export default new booksApi();
