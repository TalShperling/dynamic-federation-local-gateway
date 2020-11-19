import { getAllAuthors } from '../../utils/authorDataSource';
import { GraphQLResolverMap } from 'apollo-graphql';
import { IAuthor } from '../models/authors/Author';
import { IBook } from '../models/books/Book';

export const bookExternalResolvers: GraphQLResolverMap = {
  Book: {
    authors: async (book: IBook) => {
      console.log(JSON.stringify(book));
      let authors: IAuthor[] = await getAllAuthors();
      return authors.filter(({ books }) => books.includes(book.id));
    },
    firstWord: async(book: IBook) => {
      console.log(book);
      return book?.title?.split(" ")[0];
    }
  },
};
