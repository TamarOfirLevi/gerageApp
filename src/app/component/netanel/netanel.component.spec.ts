import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetanelComponent } from './netanel.component';

describe('NetanelComponent', () => {
  let component: NetanelComponent;
  let fixture: ComponentFixture<NetanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
