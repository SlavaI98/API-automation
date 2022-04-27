import booksApi from "../../fixtures/books.api";
import data from "../../fixtures/data.json";

context("Books", () => {
  beforeEach(() => {
    booksApi.title;
  });
  //DELETE
  it("Delete a book", () => {
    booksApi.postBook
      .then((response) => {
        expect(response.status).to.eq(201);
      })
      .then((response) => {
        booksApi
          .deleteBook(response.body.id)
          .then((response) => {
            expect(response.status).to.eq(200);
          })
          .then((response) => {
            booksApi.getBookDeleted(response.body.id);
          })
          .then((response) => {
            expect(response.status).to.eq(404);
          });
      });
  });
  //POST
  it("Create a book", () => {
    booksApi.postBook
      .then((response) => {
        booksApi.getBook(response.body.id);
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
  //Update
  it("Update a book", () => {
    booksApi.postBook
      .then((response) => {
        booksApi.updateBook(response.body.id, data.author, data.title);
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq(data.title);
        expect(response.body.author).to.eq(data.author);
      });
  });
  //Get all books
  it("Get all book", () => {
    booksApi.allBooks.then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
    });
  });
});
