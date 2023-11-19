import { Injectable } from '@angular/core';
import { IUnion } from './iunion';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public getData(key: 'books' | 'authors') {
    const data = localStorage.getItem(key);
    if (!data) return [];

    return JSON.parse(data);
  }

  public saveDataToLocalStore(key: 'books' | 'authors', data: Array<IUnion>) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getDataWithID(key: 'books' | 'authors', data: IUnion) {
    const lastID = this._getLastID(key);

    localStorage.setItem(key + 'LastID', String(+lastID + 1));

    return <IUnion>Object.assign({ id: lastID }, data);
  }

  private _getLastID(key: 'books' | 'authors') {
    const keyLastID = localStorage.getItem(key + 'LastID');

    return <string>(!keyLastID ? '1' : keyLastID);
  }
}
