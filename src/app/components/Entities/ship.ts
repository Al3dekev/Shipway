import {ShipService} from "../../services/ship.service";
import {ArrayEntity} from "./ArrayEntity";

export class Ship extends ArrayEntity {


  private _name:string;
  private _color:string;
  private _propHealness:number = 100;
  private _shipLocation:number;
  private _cssShipColor:string;

  private _spawnShip:void;




  constructor(){
    super()
  }


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

  get cssShipColor(): string {
    return this._cssShipColor;
  }

  set cssShipColor(value: string) {
    this._cssShipColor = value;
  }

  get spawnShip(): void {
    return this._spawnShip;
  }

  set spawnShip(value: void) {
    this._spawnShip = value;
  }
}
