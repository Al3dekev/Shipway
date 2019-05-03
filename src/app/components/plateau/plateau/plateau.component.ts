import { Component, OnInit } from '@angular/core';
import {PlayGameService} from "../../../services/play-game.service";
import {AlertSenderService} from "../../../services/alert-sender.service";
import {PlateauService} from "../../../services/plateau.service";

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.less']
})
export class PlateauComponent implements OnInit {

  //No attributes

  /**
   *
   * @param ps
   * @param as
   */
  constructor(public ps:PlateauService, private as:AlertSenderService) {
    this.transformPlateau();

    //This is a test, has to be deleted
    this.ps.plateauDynamicSize[5].status = 1;

    this.turnSystem();



  }

  /**
   * 0: FreeSpace
   * 1: PlayerShip
   * 2: EnemyShip
   * 3: Movement Action btn
   * 4: Attack Action btn
   */
  transformPlateau(){



    let i = 1;
    let j;
    let id = 0;
    let freeSpace = 0;

    for(i;i<=row;i++){
      j = 1;
      console.log("GRID, row: "+i);
      for(j;j<=col;j++){
        console.log("GRID, col: "+j);
        this.ps.plateauDynamicSize.push({
          id: id,
          coo:[j,i],
          status: freeSpace,
        });
        //console.log(this.ps.plateauDynamicSize[j].coo);
      }

    }


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

    while (this.ps.playerShipHealth == 0 || this.ps.enemyShipHealth == 0){

      if(this.ps.playerShipHealth != 0){
        this.as.actualTurnOwner = 1;
        this.as.addAlertInView("turn");
        // actionBox: true sur var pour activer le pad de selection d'action | blocage de tour tant qu'il n'y a pas d'action selectionné
        //
        //flouter et desactiver (false) l'actionBox
      } //end if player

      if(this.ps.enemyShipHealth !== 0){
        this.as.actualTurnOwner = 2;
        this.as.addAlertInView("turn");

      } // end if enemy

    } // turn while


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




  ngOnInit() {

  }

}
