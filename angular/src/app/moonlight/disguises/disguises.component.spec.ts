import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisguisesComponent } from './disguises.component';

describe('DisguisesComponent', () => {
  let component: DisguisesComponent;
  let fixture: ComponentFixture<DisguisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisguisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisguisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
