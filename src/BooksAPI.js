import { getConfig } from '@ijl/cli';

const api = getConfig()["books.api.base.url"];

export const getAll = () =>
  fetch(`${api}/books`)
    .then(res => res.json())
    .then(data => data.books);

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ shelf }),
  }).then(res => res.json());