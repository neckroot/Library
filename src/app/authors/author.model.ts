export const AuthorModel = [
  { name: 'id', label: 'id' },
  { name: 'lastname', label: 'Фамилия' },
  { name: 'firstname', label: 'Имя' },
  { name: 'patronymic', label: 'Отчество' },
  { name: 'birthdate', label: 'Дата рождения' },
];

export interface Author {
  id?: string;
  lastname?: string;
  firstname?: string;
  patronymic?: string;
  birthdate?: string;
}
