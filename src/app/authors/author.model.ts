export const AuthorModel = [
  { name: 'id', label: 'id', sortable: false },
  { name: 'lastname', label: 'Фамилия', sortable: false },
  { name: 'firstname', label: 'Имя', sortable: false },
  { name: 'patronymic', label: 'Отчество', sortable: false },
  { name: 'birthdate', label: 'Дата рождения', sortable: false },
];

export interface Author {
  id?: string;
  lastname?: string;
  firstname?: string;
  patronymic?: string;
  birthdate?: string;
}
