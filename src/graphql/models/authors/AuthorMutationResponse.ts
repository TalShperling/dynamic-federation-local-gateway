import { IAuthor } from './Author';

export interface IAuthorMutationResponse {
  success: boolean;
  message: string;
  authors: IAuthor[];
  author?: IAuthor;
}
