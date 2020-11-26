import { bookType } from './bookType';
import { DocumentNode } from 'graphql';
import { blaType } from './blaType';

export const bookTypeDefs: DocumentNode[] = [bookType, blaType];
