import React from 'react';
import * as BooksAPI from '../BooksAPI';
import { Link } from "react-router-dom";

const BookList = ({ onUpdateBookshelf, books, shelf }) => {
  const handleChange = async (book, value) => {
    console.log("Me this");
    await BooksAPI.update(book, value);
    onUpdateBookshelf();
  };

  const computeValue = (book) => {
    const res = shelf.filter((b) => {
      return b.id === book.id;
    });
    if (res.length > 0) {
      return res[0].shelf;
    } else {
      return "none";
    }
  };

  return (
    <ol className="books-grid">
      {Array.isArray(books) &&
        books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url("${
                      book.imageLinks && book.imageLinks.thumbnail
                    }")`,
                  }}
                />
                <div className="book-shelf-changer">
                  <select
                    value={computeValue(book)}
                    onChange={(e) => handleChange(book, e.target.value)}
                  >
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>                    
                    <option value="none">None</option>
                  </select>
                </div>

                <Link to="/loangiver/details">
                    <button className="book-shelf-details" >
                      <div className="tooltip">Det
                        <span className="tooltiptext">Go to Details</span>
                      </div>
                    </button>
                </Link>

              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                {book.authors && book.authors.join(", ")}
              </div>
            </div>
          </li>
        ))}
    </ol>
  );
};

export default BookList;
