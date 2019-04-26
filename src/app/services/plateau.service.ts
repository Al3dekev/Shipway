import { Injectable } from '@angular/core';
import {StartGameService} from "./start-game.service";
import {ActionService} from "../action.service";

@Injectable({
  providedIn: 'root'
})
export class PlateauService extends StartGameService {

  /**
   * Status 0: Free Space
   * 1: PlayerShip
   * 2: EnemyShip
   * 3: Ask for Attack
   * 4: Ask for Movement
   */
  private _plateauDynamicSize: Array<{
    id:number,
    coo:number[],
    status: number
  }> = [];
  private _plateauTabSize:number[] = [5,5];


  constructor() {
    super()
  }


  get plateauDynamicSize(): Array<{ id: number; coo: number[]; status: number }> {
    return this._plateauDynamicSize;
  }

  set plateauDynamicSize(value: Array<{ id: number; coo: number[]; status: number }>) {
    this._plateauDynamicSize = value;
  }

  get plateauTabSize(): number[] {
    return this._plateauTabSize;
  }

  set plateauTabSize(value: number[]) {
    this._plateauTabSize = value;
  }
}
