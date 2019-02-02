import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyShipComponent } from './enemy-ship.component';

describe('EnemyShipComponent', () => {
  let component: EnemyShipComponent;
  let fixture: ComponentFixture<EnemyShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemyShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
