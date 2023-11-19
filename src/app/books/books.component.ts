import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableComponent } from '../table/table.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from './book';
import { AsyncPipe } from '@angular/common';
import { AuthorService } from '../services/author.service';
import { BookModel } from './book.model';
import { TableService } from '../services/table.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TableComponent, FormsModule, ReactiveFormsModule, AsyncPipe],
})
export default class BooksComponent {
  private _bookService = inject(BookService);
  private _authorService = inject(AuthorService);
  private _tableService = inject(TableService);

  public fields = BookModel.slice(1);
  public authors$ = this._authorService.authors$.pipe(
    map((v) =>
      v.map(
        (author) =>
          `${author.lastname} ${author.firstname} ${author.patronymic}`,
      ),
    ),
  );
  public tableColumnNames = this._tableService.getTH(BookModel);
  public bookCollection$ = this._bookService.books$;
  public profileForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    publisher: new FormControl(''),
    year: new FormControl(''),
  });

  public addBook() {
    this._bookService.addBook(<Book>this.profileForm.value);
  }
}
