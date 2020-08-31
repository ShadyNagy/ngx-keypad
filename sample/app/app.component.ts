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
  isDisplay = true;
  maxLength = null;
  maxNumber = null;

  togglePeriod() {
    this.showPeriod = !this.showPeriod;
  }

  togglePassword() {
    this.isPassword = !this.isPassword;
  }

  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  onChangeMaxLength(event) {
    this.maxLength = event.target.value;
  }

  onChangeMaxNumber(event) {
    this.maxNumber = event.target.value;
  }
}