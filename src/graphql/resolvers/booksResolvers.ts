import { getAllAuthors } from '../../utils/authorDataSource';
import { GraphQLResolverMap } from 'apollo-graphql';
import { IAuthor } from '../models/authors/Author';
import { IBook } from '../models/books/Book';

export const bookExternalResolvers: GraphQLResolverMap = {
  Book: {
    // "book" is "any" because the id key is received as string type contradicting the IBook model
    // It's because of the federation that merges the Id key which compiled as String.
    authors: async (book: IBook) => {
      console.log(JSON.stringify(book));
      let authors: IAuthor[] = await getAllAuthors();
      return authors.filter(({ books }) => books.includes(book.id));
    },
  },
};
