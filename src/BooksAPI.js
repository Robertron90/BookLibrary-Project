import { getConfig } from "@ijl/cli";
import axios from "axios";

const api = "http://89.223.91.151:8083";

const client = axios.create({
  baseURL: api,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAll = () => {
  return client
    .get("/books")
    .then((response) => response.data.books)
    .catch((e) => e.response);
};

export const update = (book, shelf) => {
  client
    .put(`/books/${book.id}`, JSON.stringify({ shelf }))
    .then((response) => response.data.books)
    .catch((e) => e.response);
};

export const search = (query) =>
  client
    .post(`/search`, JSON.stringify({ query }))
    .then((response) => response.data.books)
    .catch((e) => e.response);
