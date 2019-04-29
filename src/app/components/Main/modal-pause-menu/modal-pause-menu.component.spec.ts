import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPauseMenuComponent } from './modal-pause-menu.component';

describe('ModalPauseMenuComponent', () => {
  let component: ModalPauseMenuComponent;
  let fixture: ComponentFixture<ModalPauseMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPauseMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPauseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
