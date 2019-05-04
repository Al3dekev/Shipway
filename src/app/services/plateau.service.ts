import { Injectable } from '@angular/core';
import {StartGameService} from "./start-game.service";

@Injectable({
  providedIn: 'root'
})
export class PlateauService {

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
  private _plateauTabSize:number[];
  private _columnSize:number;
  private _rowSize:number;
  private _plateauTileNumber:number;
  private _middleRowNumber:number;


  constructor(private sgs:StartGameService) {
    this.plateauTabSize = [5,5];
    this.middleRowNumber = Math.round(this.rowSize / 2);
    this.columnSize = this.plateauTabSize[0];
    this.rowSize = this.plateauTabSize[1];
    this.plateauTileNumber = this.columnSize*this.rowSize;


  }

  /**
   *
   * @param row
   * @param col
   * @param newStatus
   */
  editLocation(row:number,col:number,newStatus:number){

    this.plateauDynamicSize.forEach(obj => {
      if(obj.coo.col == col && obj.coo.row == row){
        return obj.status = newStatus; // return isn't necessary right?
      }
    })

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

  get middleRowNumber(): number {
    return this._middleRowNumber;
  }

  set middleRowNumber(value: number) {
    this._middleRowNumber = value;
  }
}
