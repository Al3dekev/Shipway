import {OnInit} from "@angular/core";
import {PlateauService} from "../../services/plateau.service";
import {TurnService} from "../../services/turn.service";
import {AttackButtonComponent} from "./attack-button/attack-button.component";
import {PlayerShipComponent} from "./player-ship/player-ship.component";
import {MovementButtonComponent} from "./movement-button/movement-button.component";
import {ActionService} from "../../services/action.service";


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

  constructor(private ps:PlateauService, private ts:TurnService, private as:ActionService, private attBtn:AttackButtonComponent){

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

  //Définir le 1er point de ref
  this.editObjRef("ship",-1,-1);





      this.ObjRefDynamic.forEach(cb =>{




          while(cb.upSide.has_wall == false){
            this.ps.plateauDynamicSize.forEach(obj => {
              if (cb.upSide.id_case == obj.id) {
                obj.status = 4;
                this.editObjRef("up",obj.coo.col,obj.coo.row)
              }
            });
          }
        while(cb.rightSide.has_wall == false){
          this.ps.plateauDynamicSize.forEach(obj => {
            if (cb.rightSide.id_case == obj.id) {
              obj.status = 4;
              this.editObjRef("up",obj.coo.col,obj.coo.row)
            }
          });
        }
        while(cb.bottomSide.has_wall == false){
          this.ps.plateauDynamicSize.forEach(obj => {
            if (cb.bottomSide.id_case == obj.id) {
              obj.status = 4;
              this.editObjRef("up",obj.coo.col,obj.coo.row)
            }
          });
        }
        while(cb.leftSide.has_wall == false){
          this.ps.plateauDynamicSize.forEach(obj => {
            if (cb.leftSide.id_case == obj.id) {
              obj.status = 4;
              this.editObjRef("up",obj.coo.col,obj.coo.row)
            }
          });
        }
        let elm:number=0;
        this.ps.plateauDynamicSize.forEach( obj =>{
          if(obj.status == 4) {
            elm++;
            this.as.btnActionSelection.push({
              id:elm,
              id_case:this.attBtn.id_case,
              selected:false,
            });
          }
        })



      });




  } //method end


  unSpawnAttBtn(){
    this.ps.plateauDynamicSize.forEach( obj =>{
      if(obj.status == 4){
        obj.status = 0;
      }
    })
  }


  editObjRef(Side:string,cooCol:number,cooRow:number){
    let idCaseRef:number;
    console.log("this.ObjRefDynamic supposed to be deleted: "+this.ObjRefDynamic);
    this.ps.plateauDynamicSize.forEach(obj => {

      if(obj.coo.col == cooCol && obj.coo.row == cooRow){
        idCaseRef = obj.id;
      }
      if(Side == "ship" && cooCol == -1 && cooRow == -1){
        this.ObjRefDynamic.splice(0,1);
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
        }); //end ObjRefDynamic
      }


      this.ObjRefDynamic.forEach( obj2 => {

        if(Side == "up" && idCaseRef == obj.id){
          obj2.upSide.coo.row = obj2.upSide.coo.row-1;
          if(obj2.upSide.coo.row == obj.coo.row && obj2.upSide.coo.col == obj.coo.col){
            obj2.upSide.has_wall = obj.wall.up;
            obj2.upSide.id_case = obj.id;
          }
        } else if(Side == "right" && idCaseRef == obj.id){
          obj2.rightSide.coo.row = obj2.rightSide.coo.row-1;
          if(obj2.rightSide.coo.row == obj.coo.row && obj2.rightSide.coo.col == obj.coo.col){
            obj2.rightSide.has_wall = obj.wall.up;
            obj2.rightSide.id_case = obj.id;
          }
        } else if(Side == "bottom" && idCaseRef == obj.id){
          obj2.bottomSide.coo.row = obj2.bottomSide.coo.row-1;
          if(obj2.bottomSide.coo.row == obj.coo.row && obj2.bottomSide.coo.col == obj.coo.col){
            obj2.bottomSide.has_wall = obj.wall.up;
            obj2.bottomSide.id_case = obj.id;
          }
        } else if(Side == "left" && idCaseRef == obj.id){
          obj2.leftSide.coo.row = obj2.leftSide.coo.row-1;
          if(obj2.leftSide.coo.row == obj.coo.row && obj2.leftSide.coo.col == obj.coo.col){
            obj2.leftSide.has_wall = obj.wall.up;
            obj2.leftSide.id_case = obj.id;
          }
        }


      });



    });
  }



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
