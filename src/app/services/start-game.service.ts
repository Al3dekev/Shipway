import { Injectable } from '@angular/core';
import {ShipService} from "./ship.service";

@Injectable({
  providedIn: 'root'
})
export class StartGameService extends ShipService{

  private _EnteringConfigMenu:boolean = true; //Normally FALSE
  private _startTheGame:boolean = false;

  constructor() {
    super()
  }


  get EnteringConfigMenu(): boolean {
    return this._EnteringConfigMenu;
  }

  set EnteringConfigMenu(value: boolean) {
    this._EnteringConfigMenu = value;
  }

  get startTheGame(): boolean {
    return this._startTheGame;
  }

  set startTheGame(value: boolean) {
    this._startTheGame = value;
  }
}
