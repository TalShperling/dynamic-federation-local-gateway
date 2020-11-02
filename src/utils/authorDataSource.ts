import { IAuthor } from '../graphql/models/authors/Author';

let authors: IAuthor[] = [
  {
    id: 1,
    firstName: 'Tal',
    lastName: 'Shperling',
    booksIds: [1, 2],
  },
  {
    id: 2,
    firstName: 'Avi',
    lastName: 'Levi',
    booksIds: [3],
  },
];

const getAllAuthors = async (): Promise<IAuthor[]> => {
  return authors;
};

const getAuthorById = async (authorId: number): Promise<IAuthor | void> => {
  return authors.find((author) => author.id === authorId);
};

const addAuthor = async (newAuthor: IAuthor): Promise<void> => {
  authors.push(newAuthor);
};

const deleteAuthorById = async (authorId: number): Promise<void> => {
  authors = authors.filter((author: IAuthor) => author.id !== authorId);
};

const updateAuthor = async (updatedAuthor: IAuthor): Promise<void> => {
  let authorToUpdate: IAuthor | void = await getAuthorById(updatedAuthor.id);
  Object.assign(authorToUpdate, updatedAuthor);
};

export { getAllAuthors, getAuthorById, addAuthor, deleteAuthorById, updateAuthor };
