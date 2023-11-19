import { inject, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../books/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private _dataService = inject(DataService);
  private _localBooks: Array<Book> = this._dataService.getData('books');

  private _books$ = new BehaviorSubject(this._localBooks);

  public get books$() {
    return this._books$;
  }

  public addBook(formData: Book) {
    const newData = this._dataService.getDataWithID('books', formData);
    this._books$.next([...this._books$.value, newData]);
    this._dataService.saveDataToLocalStore('books', this._books$.value);
  }
}
