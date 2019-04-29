import {ShipService} from "../../services/ship.service";

export class Ship {


  private _name:string;
  private _color:string;
  private _propHealness:number = 100;
  private _shipLocation:number;


  constructor(){}


  get shipLocation(): number {
    return this._shipLocation;
  }

  set shipLocation(value: number) {
    this._shipLocation = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get propHealness(): number {
    return this._propHealness;
  }

  set propHealness(value: number) {
    this._propHealness = value;
  }

}
