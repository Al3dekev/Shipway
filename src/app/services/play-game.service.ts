import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayGameService {


  private _EnteringConfigMenu:boolean = true; //Normally FALSE
  private _startTheGame:boolean = false;

  private _playerShipColor:string;
  private _playerShipName:string;
  private _playerShipHealth:number;


  private _enemyShipColor:string;
  private _enemyShipName:string;
  private _enemyShipHealth:number;

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
      let upperSide = dividedLength+1;
      console.log("spawnPlateauLocation TRUE: "+upperSide);
      return upperSide;
    } else{
      let lowerSide = ((col*row)-(dividedLength));
      console.log("spawnPlateauLocation FALSE: "+lowerSide);
      return lowerSide;
    }
  }

  editLocation(id:number,newStatus:number){

    this.plateauDynamicSize.forEach(obj => {
      if(obj.id == id){
        return obj.status = newStatus; // return isn't necessary right?
      }
      })

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

  get playerShipColor(): string {
    return this._playerShipColor;
  }

  set playerShipColor(value: string) {
    this._playerShipColor = value;
  }

  get playerShipName(): string {
    return this._playerShipName;
  }

  set playerShipName(value: string) {
    this._playerShipName = value;
  }

  get playerShipHealth(): number {
    return this._playerShipHealth;
  }

  set playerShipHealth(value: number) {
    this._playerShipHealth = value;
  }

  get enemyShipColor(): string {
    return this._enemyShipColor;
  }

  set enemyShipColor(value: string) {
    this._enemyShipColor = value;
  }

  get enemyShipName(): string {
    return this._enemyShipName;
  }

  set enemyShipName(value: string) {
    this._enemyShipName = value;
  }

  get enemyShipHealth(): number {
    return this._enemyShipHealth;
  }

  set enemyShipHealth(value: number) {
    this._enemyShipHealth = value;
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
