import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    FormsModule
  ],
  exports: [
    ...declarations,
  ]
})
export class KeypadModule { }
