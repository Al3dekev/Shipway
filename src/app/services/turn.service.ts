import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurnService {


  TurnOwner: number;
  private _PlayerShipTurn:number;
  private _EnemyShipTurn:number;

  constructor() {
    this.PlayerShipTurn = 1;
    this.EnemyShipTurn = 2;
  }


  get PlayerShipTurn(): number {
    return this._PlayerShipTurn;
  }

  set PlayerShipTurn(value: number) {
    this._PlayerShipTurn = value;
  }

  get EnemyShipTurn(): number {
    return this._EnemyShipTurn;
  }

  set EnemyShipTurn(value: number) {
    this._EnemyShipTurn = value;
  }
}
