import { GraphQLResolverMap } from 'apollo-graphql';
import {
  Author,
  AuthorBeforeFederate,
  AuthorResolvers,
  MutationCreateAuthorArgs,
  MutationUpdateAuthorArgs,
  Resolvers,
} from '../../interfaces/types';
import {
  addAuthor,
  deleteAuthorById,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
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

export const authorsMutations: Partial<Resolvers> = {
  Mutation: {
    createAuthor: async (_, args: { authorToAdd: AuthorBeforeFederate }) => {
      const duplicatedAuthor: void | IAuthor = await getAuthorById(args.authorToAdd.id);
      if (duplicatedAuthor) {
        return {
          success: false,
          message: `ID is already exists, id: ${duplicatedAuthor.id}`,
          authors: await getAllAuthors(),
          author: duplicatedAuthor,
        } as IAuthorMutationResponse;
      }

      await addAuthor(args.authorToAdd);

      return {
        success: true,
        message: 'Author was successfully added',
        authors: await getAllAuthors(),
        author: args.authorToAdd,
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
    // deleteAuthorById: async (_, args: { authorIdToDelete : string}) => {
    //   let authorToDelete: IAuthor | void = await getAuthorById(authorIdToDelete);

    //   if (authorToDelete) {
    //     await deleteAuthorById(authorIdToDelete);

    //     return {
    //       success: true,
    //       message: `Author was deleted successfully.`,
    //       Authors: await getAllAuthors(),
    //     };
    //   } else {
    //     return {
    //       success: false,
    //       message: 'Author Id was not found',
    //       Authors: await getAllAuthors(),
    //     };
    //   }
    // },
  },
};
