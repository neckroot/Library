import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TableComponent } from '../table/table.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authors',
  standalone: true,
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss',
  imports: [InputComponent, TableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsComponent {
  public fields = [
    {
      field: 'lastname',
      name: 'Фамилия',
    },
    {
      field: 'firstname',
      name: 'Имя',
    },
    {
      field: 'patronymic',
      name: 'Отчество',
    },
    {
      field: 'birthdate',
      name: 'Дата рождения',
    },
  ];

  public profileForm = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    patronymic: new FormControl(''),
    birthdate: new FormControl(''),
  });
}
