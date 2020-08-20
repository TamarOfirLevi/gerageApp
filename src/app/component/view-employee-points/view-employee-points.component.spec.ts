import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeePointsComponent } from './view-employee-points.component';

describe('ViewEmployeePointsComponent', () => {
  let component: ViewEmployeePointsComponent;
  let fixture: ComponentFixture<ViewEmployeePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployeePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
