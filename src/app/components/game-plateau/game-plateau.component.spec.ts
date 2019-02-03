import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlateauComponent } from './game-plateau.component';

describe('GamePlateauComponent', () => {
  let component: GamePlateauComponent;
  let fixture: ComponentFixture<GamePlateauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePlateauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
