import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MishapComponent } from './mishap.component';

describe('MishapComponent', () => {
  let component: MishapComponent;
  let fixture: ComponentFixture<MishapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MishapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MishapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
