import books from './query/books';
import author from './book/author';
import bimObjects from './query/bimObjects';

export default {
  Query: {
    books,
    bimObjects,
  },
  Book: {
    author,
  },
};
