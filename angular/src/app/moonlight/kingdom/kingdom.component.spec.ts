import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomComponent } from './kingdom.component';

describe('KingdomComponent', () => {
  let component: KingdomComponent;
  let fixture: ComponentFixture<KingdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
