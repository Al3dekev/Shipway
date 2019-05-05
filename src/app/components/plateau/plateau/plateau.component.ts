import { Component, OnInit } from '@angular/core';
import {AlertSenderService} from "../../../services/alert-sender.service";
import {PlateauService} from "../../../services/plateau.service";
import {ShipService} from "../../../services/ship.service";
import {TurnService} from "../../../services/turn.service";
import {EntitySpawner} from "../../Entities/entitySpawner";

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.less']
})
export class PlateauComponent implements OnInit {

  private _entitySpawner:EntitySpawner;


  /**
   *
   * @param ps
   * @param as
   * @param ss
   * @param ts
   */
  constructor(public ps:PlateauService, private as:AlertSenderService, private ss:ShipService, private ts:TurnService) {

  }

  /**
   * 0: FreeSpace
   * 1: PlayerShip
   * 2: EnemyShip
   * 3: Movement Action btn
   * 4: Attack Action btn
   */
  transformPlateau(){


    let r = 1;
    let c;
    let id = 0;
    let freeSpace = 0;


    for(r;r<=this.ps.rowSize;r++){
      c = 1;
      console.log("GRID, row: "+r);
      for(c;c<=this.ps.columnSize;c++){
        console.log("GRID, col: "+c);

        this.ps.plateauDynamicSize.push({
          id: id,
          coo:{
            col:c,
            row:r,
          },
          status: freeSpace,
          has_wall:false,
          wall:{
            up:false,
            right:false,
            bottom:false,
            left:false,
          },
        });

      } //for C
    } // for R


    //Mise en place des murs par cases
    r = 1;
    c = 1;

    for(r;r<=this.ps.rowSize;r++) {
      this.ps.plateauDynamicSize.forEach(obj => {
        if(obj.coo.row == 1){
          obj.wall.left = true;
          obj.has_wall = true;
        }
        if(obj.coo.row == this.ps.rowSize){
          obj.wall.right = true;
          obj.has_wall = true;
        }
      });

      for(c;c<=this.ps.columnSize;c++){
        this.ps.plateauDynamicSize.forEach(obj => {
          if(obj.coo.col == 1){
            obj.wall.up = true;
            obj.has_wall = true;
          }
          if(obj.coo.col == this.ps.columnSize){
            obj.wall.bottom = true;
            obj.has_wall = true;
          }
        });
      } // for C
    } //for R

/*    for(i;i<col;i++){
      for(j=0;j<row;j++){
        console.log("ID grid plateau:"+id);
        id++;
        console.log(id);
        this.ps.plateauDynamicSize.push({
          id: id,
          coo:[],
          status: freeSpace
        });
      }
      j=0;
    }*/


  }

  /**
   * A mettre dans le constructor
   */
  turnSystem(){
    this.entitySpawner.spawnShipOnPlateau(this.ts.PlayerShipTurn);
    this.entitySpawner.spawnShipOnPlateau(this.ts.EnemyShipTurn);
    if(this.ts.TurnOwner == 0){
    while (this.ss.playerShipHealth == 0 || this.ss.enemyShipHealth == 0){



        this.ts.TurnOwner = 1;
        if(this.ss.playerShipHealth !== 0){
          this.as.addAlertInView(this.ts.PlayerShipTurn,"turn");
          // actionBox: true sur var pour activer le pad de selection d'action | blocage de tour tant qu'il n'y a pas d'action selectionné
          //
          //flouter et desactiver (false) l'actionBox

        } //end if player
        this.ts.TurnOwner = 2;
        if(this.ss.enemyShipHealth !== 0){
          this.as.addAlertInView(this.ts.EnemyShipTurn,"turn");

        } // end if enemy


      }// turn while

    if(this.ss.playerShipHealth == 0){

    }
      if(this.ss.enemyShipHealth == 0){

      }

    }


  }

  /**
   *
   */
  cssGridProperties(){
    let gridProperties = {
      "grid-template-columns":"repeat("+this.ps.columnSize+",auto)"
    };
    return gridProperties;
  }



  shipMoving(){

  }





  /*
    /!***
     * in tab,
     * 0: free square space
     * 1:ship in there
     *!/
    transformPlateau(){ // IN ARRAY
      let col = this.plateauSize[0];
      let row = this.plateauSize[1];
      console.log("varcol: "+col);
      console.log("varrow: "+row);
      // Should be updated to be more dynamic. That is the simplest solution
      //let tab:number[][] = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]; // 33
      let i=0;
      let j=0;
      let add = 0;
      //col
      for(i;i<col;i++){
        console.log("col iter: "+i);
        //row
        for(j=0;j<row;j++){
          console.log("row iter: "+j);
          this.plateauDynamicallySize[i][j] = add;
          //tab[i][j] = add;
          //console.log("tab["+(i)+"]["+(j)+"]= "+tab[i][j]);
          console.log("tab["+(i)+"]["+(j)+"]= "+this.plateauDynamicallySize[i][j]);
        }
        j=0;
      }
    }
  */


  get entitySpawner(): EntitySpawner {
    return this._entitySpawner;
  }

  set entitySpawner(value: EntitySpawner) {
    this._entitySpawner = value;
  }

  ngOnInit() {
    this.transformPlateau();

    //This is a test, has to be deleted
    //this.ps.plateauDynamicSize[5].status = 1;

    this.turnSystem();

  }

}
