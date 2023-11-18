import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TableComponent } from '../table/table.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    InputComponent,
    TableComponent,
    FormsModule,
    NgFor,
    ReactiveFormsModule,
  ],
})
export default class BooksComponent {
  public fields = [
    {
      field: 'author',
      name: 'Автор',
    },
    {
      field: 'title',
      name: 'Название книги',
    },
    {
      field: 'publisher',
      name: 'Издатель',
    },
    {
      field: 'year',
      name: 'Год издания',
    },
  ];

  public profileForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    publisher: new FormControl(''),
    year: new FormControl(''),
  });
}
