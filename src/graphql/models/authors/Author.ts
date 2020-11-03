import { IBook } from '../books/Book';

export interface IAuthor {
  id: number;
  firstName: string;
  lastName: string;
  books: number[];
}
