import { Injectable } from '@angular/core';
import {ShipService} from "./ship.service";

@Injectable({
  providedIn: 'root'
})
export class StartGameService{

  private _EnteringConfigMenu:boolean = true; //Normally FALSE, set as TRUE for dev instances
  private _startTheGame:boolean = false;

  constructor(private ss:ShipService) {

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
