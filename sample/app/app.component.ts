import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';
  result = '1234';
  showPeriod = true;
  isPassword = true;

  togglePeriod() {
    this.showPeriod = !this.showPeriod;
  }

  togglePassword() {
    this.isPassword = !this.isPassword;
  }
}
