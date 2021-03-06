import React, { useEffect, useState, Fragment } from "react";
import * as BooksAPI from "@main/BooksAPI";
import { Styles } from "@main/assets/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "@main/components/MainPage";
import BookSearch from "@main/components/BookSearch";
import BookDetails from "@main/components/BookDetails";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    onUpdateBookshelf();
  }, []);

  const onUpdateBookshelf = async () => {
    setBooks(await BooksAPI.getAll());
  };

  return (
    <Router>
      <Styles />
      <div className="app">
        <Switch>
          <Route exact path="/loangiver">
            <MainPage books={books} onUpdateBookshelf={onUpdateBookshelf} />
          </Route>
          <Route exact path="/loangiver/search">
            <BookSearch shelf={books} onUpdateBookshelf={onUpdateBookshelf} />
          </Route>
          <Route
            exact
            path="/loangiver/details/:id"
            render={(props) => (
              <BookDetails
                book={books.filter((book) => book.id == props.match.params.id)}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
