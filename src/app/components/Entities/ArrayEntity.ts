import {ShipService} from "../../services/ship.service";
import {TurnService} from "../../services/turn.service";
import {PlateauService} from "../../services/plateau.service";
import {ServiceLocator} from "../../services/locator.service";
import {Input} from "@angular/core";

export class ArrayEntity {

  private _up:boolean;
  private _right:boolean;
  private _bottom:boolean;
  private _left:boolean;
  private _id_case:number;

  /**
   * 0: Free space, do not allow it as entityType ever
   * 1: PlayerShip
   * 2: EnemyShip
   * 3: Movement Action btn
   * 4: Attack Action btn
   * 5: Non-entity (for closest children)
   */
  private _entityType:number;

  /* dependencies*/

  public _ts:TurnService;
  public _ps:PlateauService;

  constructor(){
    this.ts = ServiceLocator.injector.get(TurnService);
    this.ps = ServiceLocator.injector.get(PlateauService);

  }

    checkSides(){

    this._ps.plateauDynamicSize.forEach(obj =>{

      if(obj.status == this.entityType){
        if(obj.has_wall == true){
          if(obj.wall.up){
            this.up = obj.wall.up;
          } else if(obj.wall.bottom){
            this.bottom = obj.wall.bottom;
          }else if(obj.wall.right){
            this.right = obj.wall.right;
          }else if(obj.wall.left){
            this.left = obj.wall.left;
          }
        } else{
          console.log("Aucun mur autour de "+this.entityType);
          console.log("Aucun mur autour de "+obj.id);
          this.up = false;
          this.bottom = false;
          this.right = false;
          this.left = false;
        }
      }



    })

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


  get entityType(): number {
    return this._entityType;
  }

  set entityType(value: number) {
    this._entityType = value;
  }


  get ts(): TurnService {
    return this._ts;
  }

  set ts(value: TurnService) {
    this._ts = value;
  }

  get ps(): PlateauService {
    return this._ps;
  }

  set ps(value: PlateauService) {
    this._ps = value;
  }


  get id_case(): number {
    return this._id_case;
  }

  @Input() set id_case(value: number) {
    this._id_case = value;
  }
}
