import { Component, OnInit } from '@angular/core';
import {AlertSenderService} from "../../../services/alert-sender.service";
import {Ship} from "../ship";
import {ShipService} from "../../../services/ship.service";
import {TurnService} from "../../../services/turn.service";

@Component({
  selector: 'enemy-ship',
  templateUrl: './enemy-ship.component.html',
  styleUrls: ['./enemy-ship.component.less']
})
export class EnemyShipComponent extends Ship implements OnInit {

  constructor(public ss:ShipService, private alSender:AlertSenderService,public ts:TurnService) {
    super();

  }

  ngOnInit() {

    console.log("initialisation de ENEMY SHIP");
    this.alSender.addAlertInView(this.ts.EnemyShipTurn,"spawn");
    this.entityType = this.ts.EnemyShipTurn;
    this.checkSides();
    this.name = this.ss.enemyShipName;
    this.color = this.ss.enemyShipColor;
    console.log(this.color);
    this.ss.enemyShipHealth = this.propHealness;
    //this.cssShipColor = "background-color: "+this.color+"";


  }

}
