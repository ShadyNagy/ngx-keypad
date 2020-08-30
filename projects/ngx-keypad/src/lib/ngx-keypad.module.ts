import { NgModule } from '@angular/core';
import { KeypadModule } from './keypad/keypad.module';
import { CommonModule } from '@angular/common';


const imports = [
  KeypadModule,
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ...imports,
  ],
  exports: [
    ...imports,
  ]
})
export class NgxKeypadModule { }
