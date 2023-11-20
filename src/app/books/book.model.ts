export const BookModel = [
  { name: 'id', label: 'id' },
  { name: 'author', label: 'Автор' },
  { name: 'title', label: 'Название книги' },
  { name: 'publisher', label: 'Издатель' },
  { name: 'year', label: 'Год издания' },
];

export interface Book {
  id?: string;
  author?: string;
  title?: string;
  publisher?: string;
  year?: string;
}
