import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { IUnion, UnionModel } from '../iunion';
import { Observable } from 'rxjs';
import { TableService } from '../services/table.service';

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
  @Input() tableParams!: Array<UnionModel>;
  @Input() dataTable$!: Observable<Array<IUnion>>;

  private _tableService = inject(TableService);
  private _fields!: Array<keyof IUnion>;

  public stateOrder!: Array<number>;
  public tableColumnNames!: Array<string>;
  public isSortable!: Array<boolean>;

  ngOnInit() {
    this.tableColumnNames = <Array<string>>(
      this._tableService.takeFromModel(this.tableParams, 'label')
    );

    this.isSortable = <Array<boolean>>(
      this._tableService.takeFromModel(this.tableParams, 'sortable')
    );

    this._fields = <Array<keyof IUnion>>(
      this._tableService.takeFromModel(this.tableParams, 'name')
    );

    this.stateOrder = <Array<number>>(
      Array.from({ length: this.tableColumnNames.length }).fill(0)
    );
  }

  public sortByIndex(index: number) {
    if (!this.isSortable[index]) return;
    if (!this.stateOrder[index]) this.stateOrder[index] = 1;

    this.stateOrder = this.stateOrder.map((v, i) => (i === index ? v : 0));
    this._tableService
      .sortTable(this._fields[index], this.dataTable$, this.stateOrder[index])
      .subscribe()
      .unsubscribe();

    this.stateOrder[index] = -this.stateOrder[index];
  }

  public getCell(row: object) {
    return Object.values(row);
  }
}
