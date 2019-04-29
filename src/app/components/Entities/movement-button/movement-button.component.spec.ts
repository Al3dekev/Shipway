import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementButtonComponent } from './movement-button.component';

describe('MovementButtonComponent', () => {
  let component: MovementButtonComponent;
  let fixture: ComponentFixture<MovementButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
