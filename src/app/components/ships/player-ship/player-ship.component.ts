import { Component, OnInit } from '@angular/core';
import {Ship} from "../ship";
import {PlateauComponent} from "../../plateau/plateau/plateau.component";
import {PlayGameService} from "../../../services/play-game.service";

@Component({
  selector: 'player-ship',
  templateUrl: './player-ship.component.html',
  styleUrls: ['./player-ship.component.less']
})
export class PlayerShipComponent extends Ship implements OnInit{

  constructor(public pgs:PlayGameService,private plateau:PlateauComponent) {
    super();
    console.log("initialisation de PLAYER SHIP");


  }

  addShipAtFirstSpawnLocation(){
      //this.pgs.plateauDynamicSize[this.pgs.spawnPlateauLocation(true)-1].status = 1;

    this.pgs.plateauDynamicSize[10].status = 1;
  }

  shipLocationOnPlateau(){
    let playerShip = this.plateau.plateauPlainNumberSize-this.plateau.plateauPlainNumberSize;

  }


    action(){
      console.log("Should be 25: "+this.plateau.plateauPlainNumberSize)
    }



  ngOnInit() {
    this.action;
    this.addShipAtFirstSpawnLocation
  }

}
