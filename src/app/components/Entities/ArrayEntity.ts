import {ShipService} from "../../services/ship.service";

export class ArrayEntity {

  private _up:boolean;
  private _right:boolean;
  private _bottom:boolean;
  private _left:boolean;

  constructor(){

  }


  get up(): boolean {
    return this._up;
  }

  set up(value: boolean) {
    this._up = value;
  }

  get right(): boolean {
    return this._right;
  }

  set right(value: boolean) {
    this._right = value;
  }

  get bottom(): boolean {
    return this._bottom;
  }

  set bottom(value: boolean) {
    this._bottom = value;
  }

  get left(): boolean {
    return this._left;
  }

  set left(value: boolean) {
    this._left = value;
  }
}
