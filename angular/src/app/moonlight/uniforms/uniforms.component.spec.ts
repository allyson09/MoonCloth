import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformsComponent } from './uniforms.component';

describe('UniformsComponent', () => {
  let component: UniformsComponent;
  let fixture: ComponentFixture<UniformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
