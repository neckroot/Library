import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { IUnion } from '../services/iunion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, AsyncPipe, NgIf],
})
export class TableComponent {
  @Input() tableHeader!: string;
  @Input() tableColumnNames!: Array<string>;
  @Input() dataTable$!: Observable<Array<IUnion>>;

  protected readonly Object = Object;
}
