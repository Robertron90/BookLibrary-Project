import React, { useState } from "react";
import BookList from "@main/components/BookList";
import * as BooksAPI from "@main/BooksAPI";
import { Link } from "react-router-dom";

const BookSearch = ({ shelf, onUpdateBookshelf }) => {
  const [searchResults, setSearchResults] = useState([]);

  const searchBook = async (value) => {
    setSearchResults(await BooksAPI.search(value));
  };

  const handleChange = async ({ target: { value } }) => {
    console.log("me this");
    await searchBook(value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/loangiver">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookList
          shelf={shelf}
          onUpdateBookshelf={onUpdateBookshelf}
          books={searchResults}
          onClickBookCover={() => {}}
        />
      </div>

      <div className="open-details">
        <Link to="/loangiver">
          <button />
        </Link>
      </div>
    </div>
  );
};

export default BookSearch;
