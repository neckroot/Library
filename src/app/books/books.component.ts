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
import { TableService } from '../services/table.service';
import { map } from 'rxjs';
import { SortParams } from '../table/table.model';
import { IUnion } from '../iunion';

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
  private _tableService = inject(TableService);

  public fields = BookModel.slice(2);
  public authors$ = this._getAuthors$();
  public tableColumnNames = this._tableService.takeFromModel(
    BookModel,
    'label',
  );
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

  public onSort(sortParams: SortParams) {
    if (!sortParams.index) return;

    const field = this._tableService.takeFromModel(BookModel, 'name')[
      sortParams.index
    ] as keyof IUnion;

    this._tableService
      .sortTable(field, this.bookCollection$, sortParams.order)
      .subscribe();
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
