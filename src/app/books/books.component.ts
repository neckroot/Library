import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableComponent } from '../table/table.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from './book.model';
import { AsyncPipe } from '@angular/common';
import { AuthorService } from '../services/author.service';
import { BookModel } from './book.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TableComponent, FormsModule, ReactiveFormsModule, AsyncPipe],
})
export default class BooksComponent {
  private _bookService = inject(BookService);
  private _authorService = inject(AuthorService);

  public formFieldsToGenerate = BookModel.slice(2);
  public authors$ = this._getAuthors$();
  public tableParams = BookModel;
  public bookCollection$ = this._bookService.books$;

  public profileForm = new FormGroup({
    author: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    publisher: new FormControl('', Validators.required),
    year: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^\d{1,4}$/),
    ]),
  });

  public addBook() {
    this._bookService.addBook(<Book>this.profileForm.value);
    this.profileForm.reset();
  }

  private _getAuthors$() {
    return this._authorService.authors$.pipe(
      map((authors) =>
        authors.map(
          (author) =>
            `${author.lastname} ${author.firstname} ${author.patronymic}`,
        ),
      ),
    );
  }
}
