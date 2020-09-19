import { createGlobalStyle } from 'styled-components';


export const Styles = createGlobalStyle`
html, body, .root {
    height: 100%;
  }
  
  body {
    line-height: 1.5;
  }
  
  body, .app {
    background: white;
  }
  
  /* main page */
  
  .list-books-title {
    padding: 10px 0;
    background: #2e7c31;
    text-align: center;
  }
  
  .list-books-title h1 {
    font-weight: 400;
    margin: 0;
    color: white;
  }
  
  .list-books-content {
    padding: 0 0 80px;
    flex: 1;
  }
  
  .bookshelf {
    padding: 0 10px 20px;
  }
  
  @media (min-width: 600px) {
    .bookshelf {
      padding: 0 20px 40px;
    }
  }
  
  .bookshelf-title {
    border-bottom: 1px solid #dedede;
  }
  
  .bookshelf-books {
    text-align: center;
  }
  
  .open-search {
    position: fixed;
    right: 25px;
    bottom: 25px;
  }
  
  .open-search button {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2e7d32;
    background-image: url('/icons/add.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 0;
    outline: 0;
  }
  
  .open-search button:hover {
    background-color: rgb(0, 102, 0);
  }
  
  
  /* search page */
  
  .search-books-bar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);
  }
  
  .search-books-input-wrapper {
    flex: 1;
    background: #e9e;
  }
  
  .search-books-bar input {
    width: 100%;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
  }
  
  .close-search {
    display: block;
    top: 20px;
    left: 15px;
    width: 50px;
    height: 53px;
    background-image: url('/icons/arrow-back.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 28px;
    font-size: 0;
    border: none;
    outline: none;
  }
  
  button:active {
    border: red;
    outline: none;
  }
  
  .search-books-results {
    padding: 80px 10px 20px;
  }
  
  /* books grid */
  
  .books-grid {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .books-grid li {
    padding: 10px 15px;
    text-align: left;
  }
  
  .book {
    width: 140px;
  }
  
  .book-title,
  .book-authors {
    font-size: 0.8em;
  }
  
  .book-title {
    margin-top: 10px;
  }
  
  .book-authors {
    color: #999;
  }
  
  .book-top {
    position: relative;
    height: 200px;
    display: flex;
    align-items: flex-end;
  }
  
  .book-shelf-changer {
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #60ac5d;
    background-image: url('/icons/arrow-drop-down.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  
  .book-shelf-changer select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  
  /* book cover */
  
  .book-cover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background: #eee;
  }
  
  .book-cover-title {
    padding: 20px 10px 0;
    text-align: center;
    font-size: 0.8em;
  }
`
