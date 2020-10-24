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
  showTwoZeros = false;
  maxLength = null;
  maxNumber = null;
  activeElement: HTMLInputElement;

  togglePeriod() {
    this.showPeriod = !this.showPeriod;
  }

  toggleTwoZeros() {
    this.showTwoZeros = !this.showTwoZeros;
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

  onChange(event) {
    if (!this.activeElement) {
      return;
    }
    this.activeElement.value = event;
  }

  onFocus() {
    this.result = '';
    this.activeElement = document.activeElement as HTMLInputElement;
  }
}
