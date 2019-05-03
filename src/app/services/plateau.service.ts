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
    coo:{
      col:number,
      row:number
    },
    status: number,
    has_wall:boolean,
    wall:{
      up:boolean,
      right:boolean,
      bottom:boolean,
      left:boolean,
    },
  }> = [];
  private _plateauTabSize:number[] = [5,5];
  private _columnSize:number;
  private _rowSize:number;
  private _plateauTileNumber:number;


  constructor() {
    super();

    this.columnSize = this.plateauTabSize[0];
    this.rowSize = this.plateauTabSize[1];
    this.plateauTileNumber = this.columnSize*this.rowSize;


  }


  get plateauDynamicSize(): Array<{ id: number; coo: { col: number; row: number }; status: number; has_wall: boolean; wall: { up: boolean; right: boolean; bottom: boolean; left: boolean } }> {
    return this._plateauDynamicSize;
  }

  set plateauDynamicSize(value: Array<{ id: number; coo: { col: number; row: number }; status: number; has_wall: boolean; wall: { up: boolean; right: boolean; bottom: boolean; left: boolean } }>) {
    this._plateauDynamicSize = value;
  }

  get plateauTabSize(): number[] {
    return this._plateauTabSize;
  }

  set plateauTabSize(value: number[]) {
    this._plateauTabSize = value;
  }

  get columnSize(): number {
    return this._columnSize;
  }

  set columnSize(value: number) {
    this._columnSize = value;
  }

  get rowSize(): number {
    return this._rowSize;
  }

  set rowSize(value: number) {
    this._rowSize = value;
  }

  get plateauTileNumber(): number {
    return this._plateauTileNumber;
  }

  set plateauTileNumber(value: number) {
    this._plateauTileNumber = value;
  }
}
