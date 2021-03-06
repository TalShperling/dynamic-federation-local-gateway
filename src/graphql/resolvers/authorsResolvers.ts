import { GraphQLResolverMap } from 'apollo-graphql';
import {
  addAuthor,
  deleteAuthorById,
  getAllAuthors,
  getAuthorById,
  updateAuthor
} from '../../utils/authorDataSource';
import { IAuthor } from '../models/authors/Author';
import { IAuthorMutationResponse } from '../models/authors/AuthorMutationResponse';

export const authorExternalResolvers: GraphQLResolverMap = {
  Author: {
    books: async (author: IAuthor) => {
      return author.books.map((id: string) => ({ __typename: 'Book', id }));
    },
  },
};

export const authorsQueries: GraphQLResolverMap = {
  Query: {
    authors: async () => {
      return await getAllAuthors();
    },
    author: async (_, { AuthorId }) => await getAuthorById(AuthorId),
  },
};

export const authorsMutations: GraphQLResolverMap = {
  Mutation: {
    createAuthor: async (_, { authorToAdd }) => {
      const duplicatedAuthor: void | IAuthor = await getAuthorById(authorToAdd.id);
      if (duplicatedAuthor) {
        return {
          success: false,
          message: `ID is already exists, id: ${duplicatedAuthor.id}`,
          authors: await getAllAuthors(),
          author: duplicatedAuthor,
        } as IAuthorMutationResponse;
      }

      await addAuthor(authorToAdd);

      return {
        success: true,
        message: 'Author was successfully added',
        authors: await getAllAuthors(),
        author: authorToAdd,
      } as IAuthorMutationResponse;
    },
    updateAuthor: async (_, { authorToUpdate }) => {
      const authorInList: IAuthor | void = await getAuthorById(authorToUpdate.id);

      if (authorInList) {
        await updateAuthor(authorToUpdate);

        return {
          success: true,
          message: `Author was updated successfully.`,
          authors: await getAllAuthors(),
          author: authorInList,
        } as IAuthorMutationResponse;
      } else {
        return {
          success: false,
          message: 'Author does not exists',
          authors: await getAllAuthors(),
        } as IAuthorMutationResponse;
      }
    },
    deleteAuthorById: async (_, { authorIdToDelete }) => {
      let authorToDelete: IAuthor | void = await getAuthorById(authorIdToDelete);

      if (authorToDelete) {
        await deleteAuthorById(authorIdToDelete);

        return {
          success: true,
          message: `Author was deleted successfully.`,
          Authors: await getAllAuthors(),
        };
      } else {
        return {
          success: false,
          message: 'Author Id was not found',
          Authors: await getAllAuthors(),
        };
      }
    },
  },
};
