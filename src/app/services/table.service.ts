import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  public getTH(fields: Array<{ name: string; label: string }>) {
    return fields.reduce(
      (headers, field) => (headers.push(field.label), headers),
      ['id'],
    );
  }
}
