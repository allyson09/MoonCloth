import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovesComponent } from './loves.component';

describe('LovesComponent', () => {
  let component: LovesComponent;
  let fixture: ComponentFixture<LovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
