import { Book } from '../books/book';
import { Author } from '../authors/author';

export interface IUnion extends Author, Book {}
