import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      setBooks(await BooksAPI.getAll());
    };
    getBooks();
  }, []);

  const shelfChange = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    setBooks(await BooksAPI.getAll());
  };

  const searchHandler = async (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      BooksAPI.search(search).then((searchedData) => {
        if (searchedData && !searchedData.error) {
          setSearchedBooks(
            searchedData.map((searchResult) => {
              books.forEach((book) => {
                if (searchResult.id === book.id) {
                  searchResult.shelf = book.shelf;
                }
              });
              return searchResult;
            })
          );
        }
      });
    }
  }, [search, books]);
  // const searchedBookHandler = async (query) => {
  //   setSearchedBooks(BooksAPI.search(query));
  // };

  return (
    <BrowserRouter>
      <div className="app"></div>
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              searchHandler={searchHandler}
              searchedBooks={searchedBooks}
              shelfChange={shelfChange}
            />
          }
        ></Route>
        <Route
          path="/"
          element={<Home books={books} shelfChange={shelfChange} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
