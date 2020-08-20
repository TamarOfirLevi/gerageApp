import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertPointsComponent } from './convert-points.component';

describe('ConvertPointsComponent', () => {
  let component: ConvertPointsComponent;
  let fixture: ComponentFixture<ConvertPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
