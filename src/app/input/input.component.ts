import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, ReactiveFormsModule],
})
export class InputComponent {
  @Input() fields!: Array<{ field: string; name: string }>;
  @Input() formProfile!: FormGroup;
  @Input() buttonName!: string;
  @Input() dataStorage!: string;

  handleSubmit(ds: string) {
    console.log(ds);
  }
}
