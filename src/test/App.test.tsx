import App from "../App";
import MainPage from "../components/MainPage";
import { books } from "../../stubs/api/index";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, shallow } from "enzyme";
import BookDetails from "../components/BookDetails";

import { initMock } from "./mockUtils";

import BookShelf from "../components/BookShelf";
import BookList from "../components/BookList";
import BookSearch from "../components/BookSearch";

describe("App Test", () => {
  let mock;

  beforeEach(() => {
    mock = initMock();
  });

  it("Render and test app", async () => {
    const app = mount(<App />);

    // Inital state check
    expect(app.find("div.app")).toMatchSnapshot();
  });

  it("Render and test mainPage", async () => {
    const clickFn = jest.fn();
    const app = shallow(
      <MainPage onUpdateBookshelf={clickFn} books={books["books"]} />
    );

    // Inital state check
    expect(app.find("div.list-books")).toMatchSnapshot();
    expect(app.find("div.list-books-title")).toMatchSnapshot();
    expect(app.find("div.list-books-content")).toMatchSnapshot();
  });

  it("Render and test BookShelf", async () => {
    const clickFn = jest.fn();
    const clickFn2 = jest.fn();
    const history = jest.fn();
    const app = mount(
      <Router>
        <BookShelf
          onUpdateBookshelf={clickFn}
          books={books["books"]}
          shelf={books["books"]}
          history={history}
          onClickBookCover={clickFn2}
        />
      </Router>
    );

    // Inital state check
    expect(app.find(".books-grid")).toMatchSnapshot();
    expect(app.find(".bookshelf-title")).toMatchSnapshot();
    expect(app.find(".bookshelf")).toMatchSnapshot();
  });

  it("Render and test bookList", async (done) => {
    const clickFn = jest.fn();
    const clickFn2 = jest.fn();
    const app = mount(
      <BookList
        onUpdateBookshelf={clickFn}
        books={books["books"]}
        shelf={books["books"]}
        onClickBookCover={clickFn2}
      />
    );

    const select = app.find("select").at(0);
    expect(select.instance().value).toMatch("currentlyReading");
    select.simulate("click");
    select.simulate("change", { target: { value: "wantToRead" } });
    await tick();
    expect(clickFn).toHaveBeenCalled();

    function tick() {
      return new Promise((resolve) => {
        setTimeout(() => {
          done();
          return resolve;
        }, 0);
      });
    }
  });

  it("Opens the book details page", async () => {
    const clickFn = jest.fn();
    const clickFn2 = jest.fn();
    const app = mount(
      <BookList
        onUpdateBookshelf={clickFn}
        books={books["books"]}
        shelf={books["books"]}
        onClickBookCover={clickFn2}
      />
    );

    const cover = app.find(".book").at(0);
    cover.simulate("click");
    expect(clickFn2).toHaveBeenCalled();
  });

  it("Tests BookDetail page", () => {
    const app = mount(<BookDetails book={books["books"][0]} />);
    expect(app.find("div")).toMatchSnapshot();
  });

  it("Tests search page", () => {
    const app = mount(
      <Router>
        <BookSearch shelf={books} onUpdateBookshelf={jest.fn()} />
      </Router>
    );
    expect(app.find("div.search-books")).toMatchSnapshot();
  });
});
