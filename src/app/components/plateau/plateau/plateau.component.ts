import { Component, OnInit } from '@angular/core';
import {PlayGameService} from "../../../services/play-game.service";
import {AlertSenderService} from "../../../services/alert-sender.service";

@Component({
  selector: 'app-plateau',
  templateUrl: './plateau.component.html',
  styleUrls: ['./plateau.component.less']
})
export class PlateauComponent implements OnInit {


   //Always edit row and never have more than 5 column for the actual app graphic format
  private _plateauPlainNumberSize:number;
  private _cssGridColumnNumber:number;

  private _divisionnedPartOfPlateau:number; // col+row/2


  /**
   *
   * @param pgs
   * @param as
   */
  constructor(public pgs:PlayGameService, private as:AlertSenderService) {
    this.transformPlateau();

    //This is a test, has to be deleted
    this.pgs.plateauDynamicSize[5].status = 1;

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
    let col = this.pgs.plateauTabSize[0];
    let row = this.pgs.plateauTabSize[1];

    this.plateauPlainNumberSize = col*row;

    this.cssGridColumnNumber = col;

    this.divisionnedPartOfPlateau = (col+row)/2;

    let i = 0;
    let j = 0;
    let id = 0;
    let freeSpace = 0;

    for(i;i<col;i++){
      for(j=0;j<row;j++){
        console.log("ID grid plateau:"+id);
        id++;
        console.log(id);
        this.pgs.plateauDynamicSize.push({
          id: id,
          status: freeSpace
        });
      }
      j=0;
    }


  }

  /**
   * A mettre dans le constructor
   */
  turnSystem(){

    while (this.pgs.playerShipHealth == 0 || this.pgs.enemyShipHealth == 0){

      if(this.pgs.playerShipHealth != 0){
        this.as.actualTurnOwner = 1;
        this.as.addAlertInView("turn");
        // actionBox: true sur var pour activer le pad de selection d'action | blocage de tour tant qu'il n'y a pas d'action selectionné
        //
        //flouter et desactiver (false) l'actionBox
      } //end if player

      if(this.pgs.enemyShipHealth !== 0){
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
      "grid-template-columns":"repeat("+this.cssGridColumnNumber+",auto)"
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




  get plateauPlainNumberSize(): number {
    return this._plateauPlainNumberSize;
  }

  set plateauPlainNumberSize(value: number) {
    this._plateauPlainNumberSize = value;
  }

  get cssGridColumnNumber(): number {
    return this._cssGridColumnNumber;
  }

  set cssGridColumnNumber(value: number) {
    this._cssGridColumnNumber = value;
  }

  get divisionnedPartOfPlateau(): number {
    return this._divisionnedPartOfPlateau;
  }

  set divisionnedPartOfPlateau(value: number) {
    this._divisionnedPartOfPlateau = value;
  }


  ngOnInit() {

  }

}
