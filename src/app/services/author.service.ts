import { inject, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';
import { Author } from '../authors/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private _dataService = inject(DataService);
  private _localBooks: Array<Author> = this._dataService.getData('authors');

  private _authors$ = new BehaviorSubject(this._localBooks);

  public get authors$() {
    return this._authors$;
  }

  public addAuthor(formData: Author) {
    const newData = this._dataService.getDataWithID('authors', formData);
    this._authors$.next([...this._authors$.value, newData]);
    this._dataService.saveDataToLocalStore('authors', this._authors$.value);
  }
}
