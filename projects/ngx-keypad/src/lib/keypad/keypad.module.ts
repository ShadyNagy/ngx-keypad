import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { KeypadComponent } from './keypad.component';

const declarations = [
  KeypadComponent,
];

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    FormsModule
  ],
  exports: [
    ...declarations,
  ]
})
export class KeypadModule { }
