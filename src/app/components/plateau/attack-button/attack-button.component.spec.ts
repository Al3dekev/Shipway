import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackButtonComponent } from './attack-button.component';

describe('AttackButtonComponent', () => {
  let component: AttackButtonComponent;
  let fixture: ComponentFixture<AttackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
