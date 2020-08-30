import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { KeypadComponent } from './keypad.component';

describe('KeypadComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        KeypadComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(KeypadComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sample'`, () => {
    const fixture = TestBed.createComponent(KeypadComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sample');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(KeypadComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('sample app is running!');
  });
});
