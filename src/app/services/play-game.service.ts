import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayGameService {


  private _EnteringConfigMenu:boolean = true; //Normally FALSE
  private _startTheGame:boolean = false;

  private _shipName:string;
  private _shipColor:string;

  /**
   * Status 0: Free Space
   * 1: PlayerShip
   * 2: EnemyShip
   * 3: Ask for Attack
   * 4: Ask for Movement
   */
  private _plateauDynamicSize: Array<{id:number,status:number}> = [];
  private _plateauTabSize:number[] = [5,5];

  constructor() {

  }

  /**
   * true = spawning in Upper Plateau
   * false: Lower Plateau
   * @param bool
   */
  spawnPlateauLocation(bool:boolean){

    let col = this.plateauTabSize[0];
    let dividedLength = (col-1)/2;
    let row = this.plateauTabSize[1];
    //let plateauLength = this._plateauDynamicSize.length;

    if(bool){
      return dividedLength+1;
    } else{
      return ((col*row)-(dividedLength));
    }
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

  get shipName(): string {
    return this._shipName;
  }

  set shipName(value: string) {
    this._shipName = value;
  }

  get shipColor(): string {
    return this._shipColor;
  }

  set shipColor(value: string) {
    this._shipColor = value;
  }

  get plateauDynamicSize(): Array<{ id: number; status: number }> {
    return this._plateauDynamicSize;
  }

  set plateauDynamicSize(value: Array<{ id: number; status: number }>) {
    this._plateauDynamicSize = value;
  }

  get plateauTabSize(): number[] {
    return this._plateauTabSize;
  }

  set plateauTabSize(value: number[]) {
    this._plateauTabSize = value;
  }



}
