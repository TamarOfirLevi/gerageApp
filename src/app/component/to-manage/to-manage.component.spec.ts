import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToManageComponent } from './to-manage.component';

describe('ToManageComponent', () => {
  let component: ToManageComponent;
  let fixture: ComponentFixture<ToManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
