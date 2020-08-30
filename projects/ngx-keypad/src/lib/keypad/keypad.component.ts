import { Component, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent implements OnInit {

  _background: string=null;
  @Input('background')
  set background(value: string) {
    this._background = value || '';    
  }

  _width: number=null;
  @Input('width')
  set width(value: number) {
    this._width = value || 400;    
  }

  _padding: number=8;
  @Input('padding')
  set padding(value: number) {
    this._padding = value || 10;    
  }
  
  _value: string=null;
  @Input('value')
  set value(value: string) {
    this._value = value || '';
    this.numbers = this._value;
  }

  @HostBinding('style')
	get hostStyles(): string {
		return [
      this._background?`background: ${this._background}`:'background: #ccc',
      this._width?`width: ${this._width}px`:'width: 100%',
      this._padding?`padding: ${this._padding}px`:'padding: 10px'
		].join(';');
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key.toLowerCase();

    if((event.ctrlKey || event.metaKey) && event.keyCode == 67) {
      return;
    }
      
    if((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
      return;
    }        

    event.preventDefault();

    if (key === 'c') {
      this.reset();
    } else if (key === 'backspace') {
      this.removeLast();
    } else if (key === ',' || key === '.') {
      this.insertChar('.');
    } else if (!isNaN(parseInt(key))) {
      this.insertChar(key);
    }
  }

  numbers = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  insertChar(character: string): void {
    if((character === '.' && this.numbers.length <= 0) || (character === '.' && this.numbers.includes('.'))) {
      return;
    }

    this.numbers += character;
  }

  get data(): string {
    return this.numbers;
  }

  reset(): void {
    this.numbers = '';
  }

  removeLast(): void  {
    if(this.numbers && this.numbers.length > 0) {
      this.numbers = this.numbers.substring(0, this.numbers.length - 1);
    }    
  } 
}
