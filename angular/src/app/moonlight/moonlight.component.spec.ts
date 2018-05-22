import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonlightComponent } from './moonlight.component';

describe('MoonlightComponent', () => {
  let component: MoonlightComponent;
  let fixture: ComponentFixture<MoonlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoonlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoonlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
