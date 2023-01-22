import React from "react";
import SingleBook from "./SingleBook";

const BooksShelf = ({ sectionTitle, books, category, shelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{sectionTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === category)
            .map((book) => (
              <SingleBook key={book.id} book={book} shelfChange={shelfChange} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
