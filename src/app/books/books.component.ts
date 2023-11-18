import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputComponent, TableComponent],
})
export default class BooksComponent {}
