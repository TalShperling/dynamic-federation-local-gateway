import { IAuthor } from '../graphql/models/authors/Author';
/**
 * @description
 * A fake data source and data source API.
 * It holds a list of authors which you can manipulate by CRUD operations using mutations.
 */
let authors: IAuthor[] = [
  {
    id: "1",
    firstName: 'Tal',
    lastName: 'Shperling',
    books: ["1", "2"],
  },
  {
    id: "2",
    firstName: 'Avi',
    lastName: 'Levi',
    books: ["2"],
  },
];

export const getAllAuthors = async (): Promise<IAuthor[]> => {
  return Promise.resolve(authors);
};

export const getAuthorById = async (authorId: string): Promise<IAuthor | void> => {
  return Promise.resolve(authors.find((author) => author.id === authorId));
};

export const addAuthor = async (newAuthor: IAuthor): Promise<void> => {
  authors.push(newAuthor);
  return Promise.resolve();
};

export const deleteAuthorById = async (authorId: string): Promise<void> => {
  authors = authors.filter((author: IAuthor) => author.id !== authorId);
  return Promise.resolve();
};

export const updateAuthor = async (updatedAuthor: IAuthor): Promise<void> => {
  let authorToUpdate: IAuthor | void = await getAuthorById(updatedAuthor.id);
  Object.assign(authorToUpdate, updatedAuthor);
  return Promise.resolve();
};
