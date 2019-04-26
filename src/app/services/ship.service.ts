import { Injectable } from '@angular/core';
import {PlayerShipComponent} from "../components/ships/player-ship/player-ship.component";

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  private _playerShipColor:string;
  private _playerShipName:string;
  private _playerShipHealth:number;


  private _enemyShipColor:string;
  private _enemyShipName:string;
  private _enemyShipHealth:number;

  constructor() { }




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
}
