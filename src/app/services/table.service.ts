import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUnion, UnionModel } from '../iunion';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  public takeFromModel(fields: Array<UnionModel>, key: keyof UnionModel) {
    return fields.reduce(
      (headers: Array<string | boolean>, field) => (
        headers.push(field[key]), headers
      ),
      [],
    );
  }

  public sortTable(
    field: keyof IUnion,
    data$: Observable<Array<IUnion>>,
    asc = 1,
  ) {
    return data$.pipe(
      map((rows) =>
        rows.sort((row1, row2) =>
          <string>row1[field] === <string>row2[field]
            ? 0
            : <string>row1[field] > <string>row2[field]
              ? asc
              : -asc,
        ),
      ),
    );
  }
}
