import { authorMutationResponse } from './authorMutationResponse';
import { authorInputType } from './authorInputType';
import { authorType } from './authorType';
import { DocumentNode } from 'graphql';

export const authorTypeDefs: DocumentNode[] = [authorType, authorInputType, authorMutationResponse];
