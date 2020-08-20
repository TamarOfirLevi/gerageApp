import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMishapComponent } from './update-mishap.component';

describe('UpdateMishapComponent', () => {
  let component: UpdateMishapComponent;
  let fixture: ComponentFixture<UpdateMishapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMishapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMishapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
