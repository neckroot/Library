import { UnionModel } from '../iunion';

export const BookModel: Array<UnionModel> = [
  { name: 'id', label: 'id', sortable: false },
  { name: 'author', label: 'Автор', sortable: true },
  { name: 'title', label: 'Название книги', sortable: true },
  { name: 'publisher', label: 'Издатель', sortable: true },
  { name: 'year', label: 'Год издания', sortable: true },
];

export interface Book {
  id?: string;
  author?: string;
  title?: string;
  publisher?: string;
  year?: string;
}
