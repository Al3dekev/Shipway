import {Component, HostBinding, OnInit} from '@angular/core';
import {Ship} from "../ship";
import {AlertSenderService} from "../../../services/alert-sender.service";
import {ShipService} from "../../../services/ship.service";
import {PlateauService} from "../../../services/plateau.service";
import {TurnService} from "../../../services/turn.service";


//@HostBinding(this.cssShipColor())

@Component({
  selector: 'player-ship',
  templateUrl: './player-ship.component.html',
  styleUrls: ['./player-ship.component.less']
})
export class PlayerShipComponent extends Ship implements OnInit{

  constructor(public ss:ShipService,private ps:PlateauService,private alSender:AlertSenderService,private ts:TurnService) {
    super();
  }



  shipLocationOnPlateau(){
    let playerShipLocation = this.ps.middleRowNumber;

  }


    action(){
      console.log("Should be 25: "+this.ps.rowSize*this.ps.columnSize)
    }



  ngOnInit() {
    this.alSender.addAlertInView(this.ts.PlayerShipTurn,"spawn");
    console.log("initialisation de PLAYER SHIP");
    this.action;
    this.name = this.ss.playerShipName;
    this.color = this.ss.playerShipColor;
    this.ss.playerShipHealth = this.propHealness;
    console.log(this.color);
    this.cssShipColor = "background-color: "+this.color+""
    //this.addShipAtFirstSpawnLocation
  }

}
