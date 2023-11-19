import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, RouterLink],
})
export class AppComponent {
  public data = [''];
  protected localStorage = localStorage;

  getData() {
    const newData = [];
    for (const key of Object.keys(localStorage)) {
      newData.push(<string>localStorage.getItem(key));
    }
    this.data = newData;
  }
}
