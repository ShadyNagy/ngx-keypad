import { TestBed } from '@angular/core/testing';

import { KeypadService } from './keypad.service';

describe('KeypadService', () => {
  let service: KeypadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeypadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
