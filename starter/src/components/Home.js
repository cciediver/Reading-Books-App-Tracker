import React from "react";
import { Link } from "react-router-dom";
import BooksShelf from "./BooksShelf";

const Home = ({ books, shelfChange }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/*  All shelfes will be here */}
          <BooksShelf
            books={books}
            sectionTitle="Currently Reading"
            category="currentlyReading"
            shelfChange={shelfChange}
          />
          <BooksShelf
            books={books}
            sectionTitle="Want To read"
            category="wantToRead"
            shelfChange={shelfChange}
          />
          <BooksShelf
            books={books}
            sectionTitle="Read"
            category="read"
            shelfChange={shelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="open-search_Link">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default Home;
