import React from "react";
import { Link } from "react-router-dom";
import SearchedBooksShelf from "./SearchedBooksShelf";

const Search = ({ searchHandler, searchedBooks, shelfChange }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={searchHandler}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <SearchedBooksShelf
        searchedBooks={searchedBooks}
        shelfChange={shelfChange}
      />
    </div>
  );
};

export default Search;
