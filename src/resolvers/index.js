import books from './query/books';
import author from './book/author';
import bimObjects from './query/bimObjects';
import name from './bimobject/name';
import models from './bimobject/models';

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
    models,
  },
};
