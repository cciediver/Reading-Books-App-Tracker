import React from "react";
import SingleBook from "./SingleBook";

const SearchedBooksShelf = ({ searchedBooks, shelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Search</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {searchedBooks !== null &&
            searchedBooks.map((book) => {
              return (
                <div key={book.id}>
                  <SingleBook book={book} shelfChange={shelfChange} />
                </div>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchedBooksShelf;
