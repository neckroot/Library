import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { IUnion } from '../iunion';
import { Observable } from 'rxjs';
import { SortParams } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, AsyncPipe, NgIf],
})
export class TableComponent implements OnInit {
  @Input() tableHeader!: string;
  @Input() tableColumnNames!: Array<string>;
  @Input() dataTable$!: Observable<Array<IUnion>>;

  @Output() sort = new EventEmitter<SortParams>();

  private _stateOrder!: Array<number>;

  ngOnInit() {
    this._stateOrder = <Array<number>>(
      Array.from({ length: this.tableColumnNames.length }).fill(1)
    );
  }

  public sortByIndex(index: number) {
    this.sort.emit({ index: index, order: this._stateOrder[index] });
    this._stateOrder[index] = -this._stateOrder[index];
  }

  public getCell(row: object) {
    return Object.values(row);
  }
}
