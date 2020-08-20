import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMalfunctionComponent } from './update-malfunction.component';

describe('UpdateMalfunctionComponent', () => {
  let component: UpdateMalfunctionComponent;
  let fixture: ComponentFixture<UpdateMalfunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMalfunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMalfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
