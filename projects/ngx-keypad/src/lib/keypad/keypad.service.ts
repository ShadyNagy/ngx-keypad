import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeypadService {

  constructor() { }

  static createMasked(data: string, mask: string) {
    let result = '';
    if(data === undefined || data === null || data === '') {
      return '';
    }

    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      result += mask;
    }

    return result;
  }

  static clearData(value: string) {
    if(value === undefined || value === null) {
      return;
    }

    let result = '';

    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      result = this.insertChar(result, element);
    }

    return result;
  }

  static insertChar(value: string, character: string, showPeriod: boolean=true): string {
    if(value === undefined || value === null) {
      return value;
    }

    if((character === '.' && value.length <= 0) || (character === '.' && value.includes('.'))) {
      return value;
    }

    if((showPeriod) && (character === ',' || character === '.')) {
      return value + '.'; 
    }

    if(isNaN(parseInt(character))) {
      return value;
    }
    
    return value + character;    
  }
}
