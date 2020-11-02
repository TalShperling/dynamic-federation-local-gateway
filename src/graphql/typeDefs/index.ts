import { queryType } from './query';
import { mutationType } from './mutation';
import { DocumentNode } from 'graphql';
import { bookTypeDefs } from './books';
import { authorTypeDefs } from './authors';

export const typeDefs: DocumentNode[] = [queryType, mutationType, ...bookTypeDefs, ...authorTypeDefs];
