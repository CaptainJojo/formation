import books from './query/books';
import author from './book/author';
import bimObjects from './query/bimObjects';
import name from './bimobject/name';

export default {
  Query: {
    books,
    bimObjects,
  },
  Book: {
    author,
  },
  BimObject: {
    name,
  },
};
