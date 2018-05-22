import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosplayComponent } from './cosplay.component';

describe('CosplayComponent', () => {
  let component: CosplayComponent;
  let fixture: ComponentFixture<CosplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
