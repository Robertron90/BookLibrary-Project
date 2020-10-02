import BookList from "./BookList";
import React from "react";
import { withRouter } from "react-router-dom";

const BookShelf = ({ books, onUpdateBookshelf, title, filterBy, history }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <BookList
        shelf={books}
        onUpdateBookshelf={onUpdateBookshelf}
        books={books.filter((book) => book.shelf === filterBy)}
        onClickBookCover={(id) => history.push(`/loangiver/details/${id}`)}
      />
    </div>
  </div>
);

export default withRouter(BookShelf);
