import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { Author } from './author.model';
import { AuthorModel } from './author.model';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsComponent {
  private _authorService = inject(AuthorService);
  private _tableService = inject(TableService);
  public fields = AuthorModel.slice(1);

  public profileForm = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    patronymic: new FormControl(''),
    birthdate: new FormControl(''),
  });

  public tableColumnNames = this._tableService.takeFromModel(
    AuthorModel,
    'label',
  );

  public authorList$ = this._authorService.authors$;
  addAuthor() {
    this._authorService.addAuthor(<Author>this.profileForm.value);
  }
}
