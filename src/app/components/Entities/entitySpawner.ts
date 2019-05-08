import {OnInit} from "@angular/core";
import {PlateauService} from "../../services/plateau.service";
import {TurnService} from "../../services/turn.service";
import {AttackButtonComponent} from "./attack-button/attack-button.component";
import {PlayerShipComponent} from "./player-ship/player-ship.component";
import {MovementButtonComponent} from "./movement-button/movement-button.component";


export class EntitySpawner implements OnInit{


  private _ObjRefDynamic:Array<{
    upSide:{
      has_wall:boolean,
      id_case:number,
      coo:{
        col:number,
        row:number
      }
    },
    rightSide:{
      has_wall:boolean,
      id_case:number,
      coo:{
        col:number,
        row:number
      }
    },
    bottomSide:{
      has_wall:boolean,
      id_case:number,
      coo:{
        col:number,
        row:number
      }
    },
    leftSide:{
      has_wall:boolean,
      id_case:number,
      coo:{
        col:number,
        row:number
      }
    }
  }> = [];

  constructor(private ps:PlateauService, private ts:TurnService, private attBtn:AttackButtonComponent, private playerShip:PlayerShipComponent, private MoveBtn:MovementButtonComponent){

  }

  spawnShips(){
    //changing with turn
    this.ps.plateauDynamicSize.forEach(obj=>{
      if(obj.coo.col == 3 && obj.coo.row == 1){
        obj.status = 1;
      } else if(obj.coo.col == 3 && obj.coo.row == this.ps.rowSize){
      }

    })
  }


  /**
   * true = spawning in Upper Plateau
   * false: Lower Plateau
   *
   *
   * Plateau Status:
   * 0: FreeSpace
   * 1: PlayerShip
   * 2: EnemyShip
   * 3: Movement Action btn
   * 4: Attack Action btn
   *
   * @param numEntityTurn
   */
  spawnShipOnPlateau(numEntityTurn:number){


    this.ps.plateauDynamicSize.forEach(obj =>{

    });
    //let plateauLength = this._plateauDynamicSize.length;

    this.ps.plateauDynamicSize.forEach(obj =>{
      if(numEntityTurn == this.ts.PlayerShipTurn && obj.coo.col == this.ps.middleRowNumber && obj.coo.row == 1){
        console.log("spawnPlateauLocation TRUE: ");

        obj.status = this.ts.PlayerShipTurn;
      } else if(numEntityTurn == this.ts.EnemyShipTurn && obj.coo.col == this.ps.middleRowNumber && obj.coo.row == this.ps.rowSize){
        console.log("spawnPlateauLocation TRUE: ");

        obj.status = this.ts.EnemyShipTurn;
      }
    });


  }


  spawnAttackBtn() {

    let cooObjRefToUpSide: number[];
    let cooObjRefToRightSide: number[];
    let cooObjRefToBottomSide: number[];
    let cooObjRefToLeftSide: number[];



/*    cooObjRefToUpSide[0] = obj.coo.col;
    cooObjRefToUpSide[1] = obj.coo.row;
    cooObjRefToRightSide[0] = obj.coo.col;
    cooObjRefToRightSide[1] = obj.coo.row;
    cooObjRefToBottomSide[0] = obj.coo.col;
    cooObjRefToBottomSide[1] = obj.coo.row;
    cooObjRefToLeftSide[0] = obj.coo.col;
    cooObjRefToLeftSide[1] = obj.coo.row;*/


      this.ps.plateauDynamicSize.forEach(obj => {

        if (this.playerShip.id_case == obj.id) {

          this.ObjRefDynamic.push({
            upSide: {
              has_wall: obj.wall.up,
              id_case: obj.id,
              coo: {
                col: obj.coo.col,
                row: obj.coo.row
              }
            },
            rightSide: {
              has_wall: obj.wall.right,
              id_case: obj.id,
              coo: {
                col: obj.coo.col,
                row: obj.coo.row
              }
            },
            bottomSide: {
              has_wall: obj.wall.bottom,
              id_case: obj.id,
              coo: {
                col: obj.coo.col,
                row: obj.coo.row
              }
            },
            leftSide: {
              has_wall: obj.wall.left,
              id_case: obj.id,
              coo: {
                col: obj.coo.col,
                row: obj.coo.row
              }
            }
          });
        }
      });


    this.ps.plateauDynamicSize.forEach(obj => {
      this.ObjRefDynamic.forEach(cb =>{

        if(cb.upSide.id_case == obj.id){


          while(obj.wall.up != true){
            cb.upSide.coo.row = cb.upSide.coo.row-1;

            if(cb.upSide.id_case == obj.id){

            }
          }


        }





      });
    });







    /* while () {

            while (cooObjRefToUpSide) {
              this.ps.plateauDynamicSize.forEach(obj3 => {
                if (obj3.coo.col == cooObjRefToUpSide[0] && obj3.coo.row == cooObjRefToUpSide[1] - 1) {

                }
              });
            }

            while (cooObjRefToBottomSide) {
              this.ps.plateauDynamicSize.forEach(obj3 => {

              });
            }

            while (cooObjRefToBottomSide) {
              this.ps.plateauDynamicSize.forEach(obj3 => {

              });
            }

            while (cooObjRefToBottomSide) {
              this.ps.plateauDynamicSize.forEach(obj3 => {

              });
            }


          }*/



  } //method end


  spawnMoveBtn(){

  }


  get ObjRefDynamic(): Array<{ upSide: { has_wall: boolean; id_case: number; coo: { col: number; row: number } }; rightSide: { has_wall: boolean; id_case: number; coo: { col: number; row: number } }; bottomSide: { has_wall: boolean; id_case: number; coo: { col: number; row: number } }; leftSide: { has_wall: boolean; id_case: number; coo: { col: number; row: number } } }> {
    return this._ObjRefDynamic;
  }

  set ObjRefDynamic(value: Array<{ upSide: { has_wall: boolean; id_case: number; coo: { col: number; row: number } }; rightSide: { has_wall: boolean; id_case: number; coo: { col: number; row: number } }; bottomSide: { has_wall: boolean; id_case: number; coo: { col: number; row: number } }; leftSide: { has_wall: boolean; id_case: number; coo: { col: number; row: number } } }>) {
    this._ObjRefDynamic = value;
  }

  ngOnInit(): void {

  }

}
