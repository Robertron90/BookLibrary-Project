import React, { useEffect, useState, Fragment } from "react";
import * as BooksAPI from "@main/BooksAPI";
import { Styles } from "@main/assets/styles";
import MainPage from "@main/components/MainPage";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      await onLoadBookshelf();
    })();
  }, []);

  const onLoadBookshelf = async () => {
    setBooks(await BooksAPI.getAll());
  };

  return (
    <Fragment>
      <Styles />
      <MainPage books={books} onUpdateBookshelf={onLoadBookshelf} />
    </Fragment>
  );
};

export default App;
