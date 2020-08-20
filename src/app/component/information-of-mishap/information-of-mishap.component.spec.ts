import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOfMishapComponent } from './information-of-mishap.component';

describe('InformationOfMishapComponent', () => {
  let component: InformationOfMishapComponent;
  let fixture: ComponentFixture<InformationOfMishapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationOfMishapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationOfMishapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
