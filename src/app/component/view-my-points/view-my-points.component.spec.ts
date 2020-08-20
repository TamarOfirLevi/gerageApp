import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyPointsComponent } from './view-my-points.component';

describe('ViewMyPointsComponent', () => {
  let component: ViewMyPointsComponent;
  let fixture: ComponentFixture<ViewMyPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
