import { Book } from './books/book.model';
import { Author } from './authors/author.model';

export interface IUnion extends Author, Book {}
export interface UnionModel {
  name: string;
  label: string;
}
