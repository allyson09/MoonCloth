import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryComponent } from './jewelry.component';

describe('JewelryComponent', () => {
  let component: JewelryComponent;
  let fixture: ComponentFixture<JewelryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
