import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaylightComponent } from './daylight.component';

describe('DaylightComponent', () => {
  let component: DaylightComponent;
  let fixture: ComponentFixture<DaylightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaylightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaylightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
