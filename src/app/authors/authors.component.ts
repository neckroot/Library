import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { NgFor } from '@angular/common';
import { Author } from './author';
import { AuthorModel } from './author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.scss',
  standalone: true,
  imports: [TableComponent, NgFor, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsComponent {
  private _authorService = inject(AuthorService);
  public fields = AuthorModel;

  public profileForm = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    patronymic: new FormControl(''),
    birthdate: new FormControl(''),
  });

  public tableColumnNames = this.fields.reduce(
    (headers, field) => (headers.push(field.label), headers),
    ['id'],
  );

  public authorList$ = this._authorService.authors$;
  addAuthor() {
    this._authorService.addAuthor(<Author>this.profileForm.value);
  }
}
