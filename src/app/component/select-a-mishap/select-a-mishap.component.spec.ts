import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAMishapComponent } from './select-a-mishap.component';

describe('SelectAMishapComponent', () => {
  let component: SelectAMishapComponent;
  let fixture: ComponentFixture<SelectAMishapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAMishapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAMishapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
