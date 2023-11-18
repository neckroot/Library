import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-authors',
  standalone: true,
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss',
  imports: [InputComponent, TableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsComponent {}
