import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingMishapsStatusComponent } from './viewing-mishaps-status.component';

describe('ViewingMishapsStatusComponent', () => {
  let component: ViewingMishapsStatusComponent;
  let fixture: ComponentFixture<ViewingMishapsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewingMishapsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingMishapsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
