import { Component, OnInit, HostListener, HostBinding, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { KeypadService } from './keypad.service';

@Component({
  selector: 'keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.scss'],
})
export class KeypadComponent implements OnInit, OnChanges {

  _data = '';
  @Input()
  get data() {
    return this._data;
  }
  @Output() dataChange = new EventEmitter();
  set data(val: string) {    
    this._data = val;
    this.maskIfPassword(this._isPassword); 
    this.dataChange.emit(this._data);
  }

  _showPeriod: boolean=true;
  @Input('showPeriod')
  set showPeriod(value: boolean) {    
    this._showPeriod = value;
  }

  _isPassword: boolean=false;
  @Input('isPassword')
  set isPassword(value: boolean) {    
    this._isPassword = value;
  }

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
    } else if ((this._showPeriod) && (key === ',' || key === '.')) {
      this.data = KeypadService.insertChar(this.data, '.');
    } else if (!isNaN(parseInt(key))) {
      this.data = KeypadService.insertChar(this.data, key, this._showPeriod);
    }
  }
  
  display = '';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isPassword']) {
      this.maskIfPassword(changes['isPassword'].currentValue);
    }       
  }

  ngOnInit(): void {
    this._data = KeypadService.clearData(this.data);
    this.maskIfPassword(this._isPassword);
  }

  maskIfPassword(isPassword: boolean) {
    if(isPassword) {
      this.display = KeypadService.createMasked(this._data, '*');
    }else {
      this.display = this._data;
    }
  }

  insert(character: string): void {
    this.data = KeypadService.insertChar(this._data, character, this._showPeriod);  
  }  

  reset(): void {
    this.data = '';
  }

  removeLast(): void  {
    if(this._data && this._data.length > 0) {
      this.data = this._data.substring(0, this._data.length - 1);
    }    
  } 
}
