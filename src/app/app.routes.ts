import { Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';

export const routes: Routes = [
  {
    path: 'authors',
    component: AuthorsComponent,
    title: 'Добавить автора',
  },
  {
    path: 'books',
    loadComponent: () => import('../app/books/books.component'),
    title: 'Добавить книгу',
  },
  {
    path: '**',
    redirectTo: '/authors',
    pathMatch: 'full',
  },
];
