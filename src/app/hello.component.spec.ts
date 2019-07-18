import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';

@Component({
  template: `
    <form>
      <app-hello [formControl]="ctrl" name="test"></app-hello>
    </form>
    `
})
class TestWrapperComponent {
  ctrl = new FormControl('');
}

describe('HelloComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        HelloComponent,
        TestWrapperComponent
      ],
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(TestWrapperComponent);
    const cmp = fixture.debugElement.componentInstance;
    expect(cmp).toBeTruthy();
  });

});
