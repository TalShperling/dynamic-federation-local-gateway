import { getAllAuthors } from '../../utils/authorDataSource';
import { GraphQLResolverMap } from 'apollo-graphql';
import { IAuthor } from '../models/authors/Author';

export const bookExternalResolvers: GraphQLResolverMap = {
  Book: {
    // "book" is "any" because the id key is recieved as string type contradicting the IBook model
    // It's because of the federation that merges the Id key which compiled as String.
    authors: async (book: any) => {
      let authors: IAuthor[] = await getAllAuthors();
      return authors.filter(({ books }) => books.includes(parseInt(book.id)));
    },
  },
};
