import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingMishapsComponent } from './viewing-mishaps.component';

describe('ViewingMishapsComponent', () => {
  let component: ViewingMishapsComponent;
  let fixture: ComponentFixture<ViewingMishapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewingMishapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingMishapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
