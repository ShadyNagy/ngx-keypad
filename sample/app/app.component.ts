import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';
  result = 'Shady Nagy';
  showPeriod = true;

  togglePeriod() {
    this.showPeriod = !this.showPeriod;
  }
}
