import React from "react";

const SingleBook = ({ book, shelfChange }) => {
  console.log(book);
  const shelfUpdate = (e) => {
    shelfChange(book, e.target.value);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.smallThumbnail : ""
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={shelfUpdate}
              value={book.shelf ? book.shelf : "none"}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <div className="book-authors">
          <strong style={{ fontSize: "16px" }}>
            {" "}
            {book.shelf ? book.shelf : "Add it to your shelf"}{" "}
          </strong>
        </div>
      </div>
    </li>
  );
};

export default SingleBook;
