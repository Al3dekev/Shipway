import {Component, HostBinding, OnInit} from '@angular/core';
import {Ship} from "../ship";
import {PlateauComponent} from "../../plateau/plateau/plateau.component";
import {PlayGameService} from "../../../services/play-game.service";
import {createHostBinding} from "@angular/compiler/src/core";


//@HostBinding(this.cssShipColor())

@Component({
  selector: 'player-ship',
  templateUrl: './player-ship.component.html',
  styleUrls: ['./player-ship.component.less']
})
export class PlayerShipComponent extends Ship implements OnInit{

  constructor(public pgs:PlayGameService,private plateau:PlateauComponent) {
    super();
    console.log("initialisation de PLAYER SHIP");
    this.action;
    this.name = this.pgs.playerShipName;
    this.color = this.pgs.playerShipName;

  }

  spawnShip(){
      let equation = null;
  }

  cssShipColor(){
    return {
      "background-color":this.color
    }
  }

  shipLocationOnPlateau(){
    let playerShip = this.plateau.plateauPlainNumberSize-this.plateau.plateauPlainNumberSize;

  }


    action(){
      console.log("Should be 25: "+this.plateau.plateauPlainNumberSize)
    }



  ngOnInit() {

    //this.addShipAtFirstSpawnLocation
  }

}
