import { getAllAuthors } from '../../utils/authorDataSource';
import { GraphQLResolverMap } from 'apollo-graphql';
import { IAuthor } from '../models/authors/Author';
import { Book } from '../../interfaces/types';

export const bookExternalResolvers: GraphQLResolverMap = {
  Book: {
    authors: async (book: Book) => {
      let authors: IAuthor[] = await getAllAuthors();
      return authors.filter(({ books }) => books.includes(book.id));
    },
    firstWord: async (book: Book) => {
      console.log(book);
      return book?.title?.split(' ')[0];
    },
  },
};
